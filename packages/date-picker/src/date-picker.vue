<template>
  <div class="bt-date-picker" id="datePcker">
    <bt-input
      :disabled="disabled"
      :value="label"
      @focus="handleFocus">
    </bt-input>
    <bt-calendar
      v-show="showCalendar">
    </bt-calendar>
  </div>
</template>

<script>
import { createOutClickListener } from 'src/utils/dom'
import BtInput from '~/input'
import BtCalendar from '~/calendar'

export default {

  name: 'BtDatePicker',

  components: {
    BtInput,
    BtCalendar
  },

  props: {
    value: {
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      showCalendar: false
    }
  },

  mounted () {
    this.outClickListener = createOutClickListener('#datePcker', () => {
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
