import Vue from 'vue'

const FormModel = Vue.extend({
  data () {
    return {
      value: {},
      fields: []
    }
  },

  methods: {
    addFields (field) {
    }
  }
})

export default class FormModelWrapper extends FormModel {
  constructor (value = {}) {
    super()
    this.value = value
  }
}

export function createFormModel (value) {
  return new FormModelWrapper(value)
}
