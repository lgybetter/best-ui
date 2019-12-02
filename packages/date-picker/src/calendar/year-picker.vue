<template>
  <table class="bt-calendar__year">
    <tr v-for="(row, index) in count" :key="index">
      <td v-for="(col, _index) in count"
        :key="_index"
        @click="$emit('year-change', years[count * index + _index])">
        <span :class="[{ 'is-actived': years[count * index + _index] === year}]">{{years[count * index + _index]}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
import { generateArray } from 'src/utils/data'

export default {
  name: 'BtYearPicker',
  props: {
    year: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      count: 3
    }
  },
  computed: {
    years () {
      let start = this.year - 4
      const end = this.year + 4
      start = start < 1995 ? 1995 : start
      return generateArray(start, end)
    }
  }
}
</script>
