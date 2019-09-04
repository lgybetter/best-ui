import BTSelect from './src/select'
import BTOption from './src/option'

BTSelect.install = function (Vue) {
  Vue.component(BTSelect.name, BTSelect)
}

BTOption.install = function (Vue) {
  Vue.component(BTOption.name, BTOption)
}

export const Select = BTSelect
export const Option = BTOption
