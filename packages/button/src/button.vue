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
      <!-- @slot 默认插槽 -->
      <slot></slot>
    </span>
  </button>
</template>

<script>
/**
 * Button 按钮
 * @displayName Best Button
 */
export default {

  name: 'BtButton',

  props: {
    /**
     * 类型
     * `default,primary,info,warn`
     */
    type: {
      type: String,
      default: 'default'
    },
    /**
     * 是否圆形按钮
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * 图标类名
     */
    icon: {
      type: String,
      default: ''
    }
  },

  methods: {
    /**
     * 点击事件
     * 
     * @event click
     * @type {object}
     */
    handleClick (event) {
      this.$emit('click', event)
    }
  }

}
</script>
