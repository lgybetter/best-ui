export default {
  name: 'BtTableColumn',

  props: {
    prop: String,
    label: String
  },

  render (h) {
    return h('div', this.$slots.default)
  }
}
