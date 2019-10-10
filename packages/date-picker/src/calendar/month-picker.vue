<template>
  <table class="bt-calendar__month">
    <tr v-for="(row, index) in 4" :key="index">
      <td v-for="(month, index) in generateArray(1 + index * 3, (index + 1) * 3)" :key="index">
        <span>{{month | monthMap}}</span>
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
  methods: {
    generateArray
  }
}
</script>
