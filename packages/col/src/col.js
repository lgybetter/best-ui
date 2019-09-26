export default {
  name: 'BtCol',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    }
  },

  inject: ['gap'],

  computed: {
    style () {
      return {
        paddingLeft: `${this.gap}`,
        paddingRight: `${this.gap}`
      }
    }
  },

  render (h) {
    let classList = [];
    ['span'].forEach(prop => {
      classList.push(
        prop !== 'span'
          ? `bt-col-${prop}-${this[prop]}`
          : `bt-col-${this[prop]}`
      )
    })
    return h(this.tag, {
      class: [
        'bt-col',
        ...classList
      ],
      style: this.style
    }, this.$slots.default)
  }
}
