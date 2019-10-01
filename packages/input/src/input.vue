<template>
  <div :class="[
    isTextArea ? 'bt-textarea' : 'bt-input'
  ]">
  <template v-if="!isTextArea">
    <input class="bt-input__inner"
      v-bind="$attrs"
      :readonly="readonly"
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
    @click="handleClick"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
    @input="handleInput">
  </textarea>
  </div>
</template>

<script>
import EmitterMixins from 'src/mixins/emitter'

export default {

  name: 'BtInput',

  mixins: [EmitterMixins],

  props: {
    type: {
      type: String,
      default: 'text'
    },
    readonly: Boolean
  },

  computed: {
    isTextArea () {
      return this.type === 'textarea'
    }
  },

  methods: {

    handleChange (event) {
      this.$emit('change', event.target.value)
      this.dispatch('BtFormItem', 'field-change')
    },

    handleInput (event) {
      this.$emit('input', event.target.value)
    },

    handleBlur (event) {
      this.$emit('blur', event)
      this.dispatch('BtFormItem', 'field-blur')
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
