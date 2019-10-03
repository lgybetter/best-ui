import BTCalendar from '../date-picker/src/calendar'

BTCalendar.install = function (Vue) {
  Vue.component(BTCalendar.name, BTCalendar)
}

export default BTCalendar
