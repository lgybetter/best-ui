import BTForm from './src/form'

BTForm.install = function (Vue) {
  Vue.component(BTForm.name, BTForm)
}

export * from './src/form-model'
export default BTForm
