<template>
  <div :class="[
    isTextArea ? 'bt-textarea' : 'bt-input'
  ]">
  <template v-if="!isTextArea">
    <input class="bt-input__inner"
      v-bind="$attrs"
      :readonly="readonly"
      @change="handleChange"
      @input="handleInput"/>
  </template>
  <textarea v-else
    class="bt-textarea__inner"
    v-bind="$attrs"
    :readonly="readonly"
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
    },

    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }

}
</script>
