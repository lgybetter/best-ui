import BTTableColumn from '../table/src/table-column'

BTTableColumn.install = function (Vue) {
  Vue.component(BTTableColumn.name, BTTableColumn)
}

export default BTTableColumn
