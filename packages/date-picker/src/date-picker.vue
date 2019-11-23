<template>
  <div class="bt-date-picker" :id="id">
    <bt-input
      :disabled="disabled"
      :value="displayDate"
      @focus="handleFocus"
      readonly>
    </bt-input>
    <bt-calendar
      v-show="showCalendar"
      :value="value"
      v-on="$listeners">
    </bt-calendar>
  </div>
</template>

<script>
import { createOutClickListener } from 'src/utils/dom'
import BtInput from '~/input'
import BtCalendar from '~/calendar'
import { dateFormat } from 'src/utils/date'
import { genUUID } from 'src/utils/uuid'
const format = 'yyyy-MM-dd'

export default {

  name: 'BtDatePicker',

  components: {
    BtInput,
    BtCalendar
  },

  props: {
    value: {
      required: true,
      type: Date
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  computed: {
    displayDate () {
      return dateFormat(this.value, format)
    }
  },

  data () {
    return {
      showCalendar: false,
      id: genUUID()
    }
  },

  mounted () {
    this.outClickListener = createOutClickListener(`#${this.id}`, () => {
      this.showCalendar = false
    })
    document.addEventListener('click', this.outClickListener)
  },

  methods: {
    handleFocus () {
      this.showCalendar = true
    }
  }

}
</script>
