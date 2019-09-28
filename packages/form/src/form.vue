<template>
  <form class="bt-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'BtForm',

  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },

  provide () {
    return {
      formModel: this.model,
      formRules: this.rules
    }
  }
}
</script>
