import BTRadio from './src/radio'

BTRadio.install = function (Vue) {
  Vue.component(BTRadio.name, BTRadio)
}

export default BTRadio
