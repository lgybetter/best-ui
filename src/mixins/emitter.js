export default {
  methods: {
    /**
     * @desc 向上遍历找寻对应组件名称的父组件分发事件
     * @param {*} componentName
     * @param {*} eventName
     * @param {*} params
     */
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit(eventName, params)
      }
    },
    /**
     * @desc 向下便利找寻对应组件名称的子组件分发事件
     * @param {*} componentName
     * @param {*} eventName
     * @param {*} params
     */
    broadcast (componentName, eventName, params) {
      this.$children.forEach(child => {
        const name = child.$options.name

        if (name === componentName) {
          child.$emit(eventName, params)
        } else {
          this.broadcast.apply(child, [componentName, eventName, params])
        }
      })
    }
  }
}
