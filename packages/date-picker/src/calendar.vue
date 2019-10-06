<template>
  <div class="bt-calendar bt-panel">
    <div class="bt-calendar__bar">
      <label class="bt-calendar__label">{{year}}</label>
      <label class="bt-calendar__label">{{monthName}}</label>
      <div class="bt-calendar__pager">
        <button
          type="button"
          :class="['btn-pre']"
          @click="handleMonthPre">
          <i class="el-icon-arrow-left"></i>
        </button>
        <button
          type="button"
          :class="['btn-next']"
          @click="handleMonthNext">
          <i class="el-icon-arrow-right"></i>
        </button>
      </div>
    </div>
    <table class="bt-calendar__inner">
      <tr>
        <th v-for="(week, index) in weeks" :key="index">
          <span>{{week}}</span>
        </th>
      </tr>
      <tr v-for="(weekItem, index) in weekNum" :key="index">
        <td v-for="(dayItem, index) in days.slice(index * 7, ((index + 1) * 7 > days.length ? day.length : (index + 1) * 7))"
          :key="index"
          @click="handleDayChange(dayItem)">
          <span :class="[
            {'is-disabled': dayItem.disabled},
            {'is-actived': (dayItem.dayNum === day) && (!dayItem.disabled)}
          ]">
            {{dayItem.dayNum}}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

// 闰年
const monthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 平年
const monthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 一个月第一天星期数
const monthFirstDay = (year, month) => {
  return new Date(year, month, 1).getDay()
}
// 一个月的总天数
const monthDayCount = (year, month) => {
  const isLeap = year % 4 === 0
  return isLeap ? monthLeap[month] : monthNormal[month]
}
const monthsName = (month) => {
  return [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ][month]
}
// const monthsShortName = () => {
//   return [
//     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ]
// }

const weeksName = () => {
  return [
    'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
  ]
}
export default {
  name: 'BtCalendar',

  props: {
    value: {
      type: Date,
      default () {
        return new Date()
      }
    }
  },

  watch: {
    value: {
      handler (val) {
        this.day = val.getDate()
        this.month = val.getMonth()
        this.year = val.getFullYear()
      },
      immediate: true
    },
    day (val) {
      this.$emit('input', new Date(this.year, this.month, val))
    },
    month (val) {
      this.$emit('input', new Date(this.year, val, this.day))
    },
    year (val) {
      this.$emit('input', new Date(val, this.month, this.day))
    }
  },

  computed: {
    monthName () {
      return monthsName(this.month)
    },
    days () {
      let days = []
      let firstDay = this.firstDay === 0 ? 7 : this.firstDay
      for (let i = 1; i < firstDay; i++) {
        let lastMonth = this.month - 1
        let year = this.year
        if (this.month === 0) {
          lastMonth = 11
          year = this.year - 1
        }
        days.push({
          disabled: true,
          dayNum: monthDayCount(year, lastMonth) - (this.firstDay - i) + 1
        })
      }
      for (let i = 1; i <= monthDayCount(this.year, this.month); i++) {
        days.push({
          disabled: false,
          dayNum: i
        })
      }
      const remainder = days.length % 7
      if (remainder !== 0) {
        for (let i = 1; i <= 7 - remainder; i++) {
          days.push({
            disabled: true,
            dayNum: i
          })
        }
      }
      return days
    },
    firstDay () {
      return monthFirstDay(this.year, this.month)
    },
    weeks () {
      return weeksName()
    },
    weekNum () {
      let remainder = this.days.length % 7
      let num = parseInt(this.days.length / 7)
      return remainder > 0 ? num + 1 : num
    }
  },

  data () {
    return {
      day: 0,
      year: 0,
      month: 0
    }
  },

  methods: {
    handleDayChange (item) {
      if (item.disabled) {
        return
      }
      this.day = item.dayNum
    },
    handleMonthPre () {
      if (this.month === 0) {
        this.month = 11
        this.year--
        return
      }
      this.month--
    },
    handleMonthNext () {
      if (this.month === 11) {
        this.month = 0
        this.year++
        return
      }
      this.month++
    }
  }
}
</script>
