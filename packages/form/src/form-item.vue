<template>
  <div class="bt-form-item">
    <label v-if="label"
      class="bt-form-item__label">
      {{label}}
    </label>
    <div class="bt-form-item__inner">
      <slot :model="formModel.value"
        :value="fieldValue">
      </slot>
    </div>
    <label v-show="isError"
      class="bt-form-item__error">
      {{errorMessage}}
    </label>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'BtFormItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    },
    rules: Object
  },

  inject: ['formModel', 'formRules'],

  data () {
    return {
      isError: false,
      errorMessage: ''
    }
  },

  computed: {
    innerRules () {
      if (this.rules) {
        return this.rules
      }
      let formRules = this.formRules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },

    fieldValue () {
      return this.formModel.value[this.prop]
    }
  },

  mounted () {
    if (this.prop && this.formModel) {
      this.formModel.addFields(this.prop, this)

      this.initEvents()
    }
  },

  methods: {

    initEvents () {
      this.$on('field-blur', this.handleFieldBlur)
      this.$on('field-change', this.handleFieldChagne)
    },

    getFilterField (trigger) {
      return this.innerRules.filter(rule => rule.trigger && rule.trigger.indexOf(trigger) !== -1)
    },

    validate (trigger, callback = function () {}) {
      let rules = trigger ? this.getFilterField(trigger) : this.innerRules
      if (!rules || rules.length === 0) {
        return callback()
      }

      let descriptor = {}
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        if (errors && errors.length) {
          this.isError = true
          this.errorMessage = errors[0].message
        } else {
          this.isError = false
        }
        callback(errors)
      })
    },

    handleFieldBlur () {
      this.validate('blur')
    },

    handleFieldChagne () {
      this.validate('change')
    }
  }
}
</script>
