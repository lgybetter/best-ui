import Button from '~/button/index'
import Input from '~/input/index'
import { Select, Option } from '~/select/index'

const components = [
  Button,
  Input,
  Select,
  Option
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
