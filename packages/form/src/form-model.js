import Vue from 'vue'

const FormModel = Vue.extend({
  data () {
    return {
      value: {},
      fields: {}
    }
  },

  methods: {
    addFields (prop, field) {
      this.fields[prop] = field
    },

    validate () {
      return new Promise((resolve, reject) => {
        const fields = this.fields
        Object.entries(fields).forEach(([key, instance]) => {
          instance.validate('', errors => {
            if (errors) {
              reject(errors)
            }
          })
        })
        resolve()
      })
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
