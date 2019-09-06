import Button from '~/button/index'
import Input from '~/input/index'
import Select from '~/select/index'
import Option from '~/option/index'
import Table from '~/table/index'

const components = [
  Button,
  Input,
  Select,
  Option,
  Table
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
