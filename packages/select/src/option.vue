<template>
  <li class="bt-select-dropdown__item"
    @click.stop="handleClick"
    :class="[{
      'selected': isSelected
    }]">
    <slot>
      <span>{{currentLabel}}</span>
    </slot>
  </li>
</template>

<script>
export default {

  name: 'BtOption',

  props: {
    value: {
      required: true,
      type: [String, Number]
    },
    label: [String, Number]
  },

  inject: ['select'],

  computed: {

    currentLabel () {
      return this.label
    },

    isSelected () {
      return this.value === this.select.value
    }
  },

  created () {
    this.isSelected && this.setSelected()
  },

  methods: {

    setSelected () {
      this.select.handleSelected({
        value: this.value,
        label: this.label
      })
    },

    handleClick () {
      this.setSelected()
    }
  }
}
</script>
