<template>
  <label class="bt-checkbox">
    <span class="bt-checkbox__input">
      <span :class="['bt-checkbox__inner', {'is-selected': isSelected}]"></span>
      <input class="bt-checkbox__original"
        type="checkbox"
        v-model="innerValue"
        @change="handleChange"/>
    </span>
    <span class="bt-checkbox__label" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BtCheckbox',

  props: {
    value: {}
  },

  computed: {
    isSelected () {
      return !!this.innerValue
    },

    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    handleChange (event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>
