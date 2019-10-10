<template>
  <table class="bt-calendar__day">
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
</template>

<script>
export default {
  name: 'BtDayPicker',

  props: {
    weeks: {
      type: Array,
      default () {
        return []
      }
    },
    weekNum: {
      type: Number,
      default () {
        return 0
      }
    },
    day: {
      type: Number,
      default () {
        return 0
      }
    },
    days: {
      type: Array,
      default () {
        return []
      }
    }
  },

  methods: {
    handleDayChange (item) {
      this.$emit('day-change', item)
    }
  }
}
</script>
