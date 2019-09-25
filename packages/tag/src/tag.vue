<template>
  <span :class="[
    'bt-tag',
    type ? `bt-tag--${type}` : ''
  ]">
    <slot v-if="$slots.default"></slot>
    <i :class="icon" v-if="icon"></i>
  </span>
</template>

<script>
export default {
  name: 'BtTag',
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
