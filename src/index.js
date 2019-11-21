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
import Form from '~/form'
import FormItem from '~/form-item'
import Pagination from '~/pagination'
import Calendar from '~/calendar'
import DatePicker from '~/date-picker'

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
  Col,
  Form,
  FormItem,
  Pagination,
  Calendar,
  DatePicker
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
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
  Col,
  Form,
  FormItem,
  Pagination,
  Calendar,
  DatePicker
}
