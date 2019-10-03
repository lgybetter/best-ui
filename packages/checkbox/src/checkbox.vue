<template>
  <label :class="['bt-checkbox', {'is-disabled': disabled}]">
    <span class="bt-checkbox__input">
      <span :class="['bt-checkbox__inner', {'is-selected': isSelected}]"></span>
      <input class="bt-checkbox__original"
        type="checkbox"
        v-model="innerValue"
        :disabled="disabled"
        @change="handleChange"/>
    </span>
    <span class="bt-checkbox__label" v-if="$slots.default">
      <!-- @slot 默认插槽 -->
      <slot></slot>
    </span>
  </label>
</template>

<script>
/**
 * Checkbox 多选框
 * @displayName Best Checkbox
 */
export default {
  name: 'BtCheckbox',

  props: {
    /**
     * @model
     */
    value: {
      type: [Boolean, Array],
      default: false
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    }
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
        /**
         * Input 事件
         *
         * @event input
         * @type {string | array}
         */
        this.$emit('input', val)
      }
    }
  },

  methods: {
    handleChange (event) {
      /**
       * Change 事件
       *
       * @event change
       * @type {boolean}
       */
      this.$emit('change', event.target.checked)
    }
  }
}
</script>
