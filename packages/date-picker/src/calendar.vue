<template>
  <div class="bt-calendar">
    <table class="bt-calendar__inner">
      <tr>
        <th v-for="(week, index) in weeks" :key="index">
          <span>{{week}}</span>
        </th>
      </tr>
      <tr v-for="(weekItem, index) in weekNum" :key="index">
        <td v-for="(dayItem, index) in days.slice(index * 7, ((index + 1) * 7 > days.length ? day.length : (index + 1) * 7))"
          :key="index">
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

export default {
  name: 'BtCalendar',

  props: {
    date: {
      type: Date,
      default () {
        return new Date()
      }
    }
  },

  computed: {
    year () {
      return 2019
    },
    month () {
      return 9
    },
    day () {
      return 3
    },
    days () {
      let days = []
      for (let i = 1; i < this.firstDay; i++) {
        let lastMonth = this.month - 1 <= 0 ? 12 : this.month - 1
        days.push({
          disabled: true,
          dayNum: monthDayCount(this.year, lastMonth) - i + 1
        })
      }
      let test = monthDayCount(this.year, this.month)
      for (let i = 1; i <= test; i++) {
        days.push({
          disabled: false,
          dayNum: i
        })
      }
      const remainder = days.length % 7
      if (remainder !== 0) {
        for (let i = 1; i < remainder; i++) {
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
      return [
        'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
      ]
    },
    weekNum () {
      let remainder = this.days.length % 7
      let num = parseInt(this.days.length / 7)
      return remainder > 0 ? num + 1 : num
    }
  },

  data () {
    return {
    }
  }
}
</script>
