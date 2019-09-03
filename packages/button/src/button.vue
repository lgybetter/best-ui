<template>
  <button class="bt-button"
    @click="handleClick"
    :class="[
      type ? `bt-button--${type}` : ''
    ]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {

  name: 'BtButton',

  props: {
    type: {
      type: String,
      default: 'default'
    }
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
