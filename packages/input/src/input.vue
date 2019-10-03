<template>
  <div :class="[
    isTextArea ? 'bt-textarea' : 'bt-input'
  ]">
  <template v-if="!isTextArea">
    <input :class="[
        'bt-input__inner',
        {'is-disabled': disabled}
      ]"
      v-bind="$attrs"
      :readonly="readonly"
      :disabled="disabled"
      @click="handleClick"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @input="handleInput"/>
  </template>
  <textarea v-else
    class="bt-textarea__inner"
    v-bind="$attrs"
    :readonly="readonly"
    :disabled="disabled"
    @click="handleClick"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @input="handleInput">
  </textarea>
  </div>
</template>

<script>
export default {

  name: 'BtInput',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isTextArea () {
      return this.type === 'textarea'
    }
  },

  methods: {

    handleChange (event) {
      this.$emit('change', event.target.value)
    },

    handleInput (event) {
      this.$emit('input', event.target.value)
    },

    handleBlur (event) {
      this.$emit('blur', event)
    },

    handleFocus (event) {
      this.$emit('focus', event)
    },

    handleClick (event) {
      this.$emit('click', event)
    }
  }

}
</script>
