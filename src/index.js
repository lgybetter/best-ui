import Button from '~/button'
import Input from '~/input'
import Select from '~/select'
import Option from '~/option'
import Table from '~/table'
import TableColumn from '~/table-column'
import Tag from '~/tag'
import Panel from '~/panel'

const components = [
  Button,
  Input,
  Select,
  Option,
  Table,
  TableColumn,
  Tag,
  Panel
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Button
}
