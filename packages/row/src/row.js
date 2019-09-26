export default {
  name: 'BtRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gap: {
      type: Number | String,
      default: 6
    }
  },

  provide () {
    return {
      gap: this._gap
    }
  },

  computed: {
    _gap () {
      if (this.gap) {
        return typeof this.gap === 'number'
          ? `${this.gap}px`
          : 'px'.indexOf(this.gap) !== -1
            ? this.gap
            : `${this.gap}px`
      }
    },
    style () {
      return {
        marginLeft: `-${this.gap}px`,
        marginRight: `-${this.gap}px`
      }
    }
  },

  render (h) {
    return h(this.tag, {
      class: [
        'bt-row',
        'clearfix'
      ],
      style: this.style
    }, this.$slots.default)
  }
}
