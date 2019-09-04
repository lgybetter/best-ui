<template>
  <div class="bt-select">
    <bt-input
      :value="label"
      :readonly="readonly"
      @click.stop="handleClick"
      @blur="handleBlur"
      @focus="handleFocus">
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

export default {

  name: 'BtSelect',

  components: {
    BtInput,
    BtSelectDropdown
  },

  props: {
    value: {
      required: true
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
      visible: false
    }
  },

  methods: {
    handleSelected ({ value, label }) {
      this.label = label
      this.$emit('input', value)
    },

    handleClick () {
      this.visible = !this.visible
    },

    handleFocus () {
    },

    handleBlur () {
      setTimeout(() => {
        this.visible = false
      }, 200)
    }
  }
}
</script>
