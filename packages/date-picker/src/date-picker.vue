<template>
  <div class="bt-date-picker" :id="id">
    <bt-input
      :disabled="disabled"
      :value="displayDate"
      @click.stop="handleClick"
      readonly>
    </bt-input>
    <i :class="['el-icon-date', {'is-reverse': visible}]"></i>
    <bt-calendar
      v-show="visible"
      :value="value"
      v-on="$listeners">
    </bt-calendar>
  </div>
</template>

<script>
import BtInput from '~/input'
import BtCalendar from '~/calendar'
import { dateFormat } from 'src/utils/date'
import { genUUID } from 'src/utils/uuid'
import { createOutClickListener } from 'src/utils/dom'
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
      visible: false,
      id: genUUID()
    }
  },

  mounted () {
    this.outClickListener = createOutClickListener(`#${this.id}`, () => {
      this.visible = false
    })
    document.addEventListener('click', this.outClickListener)
  },

  methods: {
    handleClick () {
      this.visible = !this.visible
    }
  }

}
</script>
