<template>
  <div class="bt-select" :id="id">
    <bt-input
      :disabled="disabled"
      :value="label"
      :readonly="readonly"
      @click.stop="handleClick">
    </bt-input>
    <i :class="['el-icon-arrow-up', {'is-reverse': visible}]"></i>
    <bt-select-dropdown
      v-show="visible">
      <slot></slot>
    </bt-select-dropdown>
  </div>
</template>

<script>
import BtInput from '~/input'
import BtSelectDropdown from './select-dropdown'
import { genUUID } from 'src/utils/uuid'
import { createOutClickListener } from 'src/utils/dom'

export default {

  name: 'BtSelect',

  components: {
    BtInput,
    BtSelectDropdown
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

  provide () {
    return {
      select: this
    }
  },

  computed: {
    readonly () {
      return true
    }
  },

  data () {
    return {
      label: '',
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
    handleSelected ({ value, label }) {
      this.label = label
      this.$emit('input', value)
    },

    handleClick () {
      this.visible = !this.visible
    }
  }
}
</script>
