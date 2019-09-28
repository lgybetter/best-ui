<template>
  <button
  type="button"
  :class="[
      'bt-button',
      type ? `bt-button--${type}` : '',
      {
        'is-circle': circle
      }
    ]"
  @click="handleClick">
    <i :class="icon" v-if="icon"></i>
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
    },
    circle: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }

}
</script>
