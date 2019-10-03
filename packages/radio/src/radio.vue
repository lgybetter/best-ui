<template>
  <label :class="['bt-radio', {'is-disabled': disabled}]">
    <span class="bt-radio__input">
      <span :class="['bt-radio__inner', {'is-actived': isActived}]"></span>
      <input class="bt-radio__original"
        type="radio"
        :value="label"
        v-model="innerValue"
        :disabled="disabled"
        @change="handleChange"/>
    </span>
    <span class="bt-radio__label" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'BtRadio',

  props: {
    value: {},
    label: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isActived () {
      return this.value === this.label
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
    }
  }
}
</script>
