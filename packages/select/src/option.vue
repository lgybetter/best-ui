<template>
  <li class="bt-select-dropdown__item">
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
      required: true
    },
    label: [String, Number]
  },

  computed: {
    currentLabel () {
      return this.label
    }
  }
}
</script>
