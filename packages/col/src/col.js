/**
 * Col 栅格布局列
 * @displayName Best Col
 */
export default {
  name: 'BtCol',

  props: {
    /**
     * 栅格列Dom标签
     */
    tag: {
      type: String,
      default: 'div'
    },
    /**
     * 栅格列占比 1 到 24
     */
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
    const classList = [];
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
