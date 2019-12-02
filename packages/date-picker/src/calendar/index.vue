<template>
  <div class="bt-calendar bt-panel">
    <div class="bt-calendar__bar">
      <label class="bt-calendar__label" @click="handleShowSelector('showYear')">{{year}}</label>
      <label class="bt-calendar__label" @click="handleShowSelector('showMonth')">{{monthName}}</label>
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
    <bt-day-picker
      v-show="showDay"
      :weeks="weeks"
      :weekNum="weekNum"
      :days="days"
      :day="day"
      @day-change="handleDayChange">
    </bt-day-picker>
    <bt-month-picker
      v-show="showMonth"
      :month="month"
      @month-change="handleMonthChange">
    </bt-month-picker>
    <bt-year-picker
      v-show="showYear"
      :year="year"
      @year-change="handleYearChange">
    </bt-year-picker>
  </div>
</template>

<script>
import BtDayPicker from './day-picker'
import BtMonthPicker from './month-picker'
import BtYearPicker from './year-picker'

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

const weeksName = () => {
  return [
    'MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
  ]
}
export default {
  name: 'BtCalendar',

  components: {
    BtDayPicker,
    BtMonthPicker,
    BtYearPicker
  },

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
      const days = []
      const firstDay = this.firstDay === 0 ? 7 : this.firstDay
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
      const remainder = this.days.length % 7
      const num = parseInt(this.days.length / 7)
      return remainder > 0 ? num + 1 : num
    }
  },

  data () {
    return {
      day: 0,
      year: 0,
      month: 0,
      showDay: true,
      showMonth: false,
      showYear: false
    }
  },

  methods: {
    handleDayChange (item) {
      if (item.disabled) {
        return
      }
      this.day = item.dayNum
    },
    handleMonthChange (month) {
      this.month = month
      this.handleShowSelector('showDay')
    },
    handleYearChange (year) {
      this.year = year
      this.handleShowSelector('showDay')
    },
    handleMonthPre () {
      if (this.showYear) {
        this.year--
        return
      }
      if (this.month === 0) {
        this.month = 11
        this.year--
        return
      }
      this.month--
    },
    handleMonthNext () {
      if (this.showYear) {
        this.year++
        return
      }
      if (this.month === 11) {
        this.month = 0
        this.year++
        return
      }
      this.month++
    },
    handleShowSelector (key) {
      this.showMonth = false
      this.showDay = false
      this.showYear = false
      this[key] = true
    }
  }
}
</script>
