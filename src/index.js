import Button from '~/button'
import Input from '~/input'
import Select from '~/select'
import Option from '~/option'
import Table from '~/table'
import TableColumn from '~/table-column'
import Tag from '~/tag'
import Panel from '~/panel'
import Checkbox from '~/checkbox'
import Radio from '~/radio'
import Row from '~/row'
import Col from '~/col'

const components = [
  Button,
  Input,
  Select,
  Option,
  Table,
  TableColumn,
  Tag,
  Panel,
  Checkbox,
  Radio,
  Row,
  Col
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
