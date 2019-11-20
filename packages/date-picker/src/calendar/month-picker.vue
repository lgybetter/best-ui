<template>
  <table class="bt-calendar__month">
    <tr v-for="(row, index) in 4" :key="index">
      <td v-for="(_month, _index) in generateArray(1 + index * 3, (index + 1) * 3)"
        :key="_index"
        @click="$emit('month-change', _month - 1)">
        <span :class="[{ 'is-actived': month === _month - 1}]">{{_month | monthMap}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
import { generateArray } from 'src/utils/data'

export default {
  name: 'BtMonthPicker',
  filters: {
    monthMap (val) {
      return [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ][val - 1]
    }
  },
  props: {
    month: {
      type: Number,
      required: true
    }
  },
  methods: {
    generateArray
  }
}
</script>
