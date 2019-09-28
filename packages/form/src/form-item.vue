<template>
  <div class="bt-form-item">
    <label v-if="label"
      class="bt-form-item__label">
      {{label}}
    </label>
    <div class="bt-form-item__inner">
      <slot :value="fieldValue" :model="formModel"></slot>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';

export default {
  name: 'BtFormItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      required: true
    },
    rules: Object
  },

  inject: ['formModel', 'formRules'],

  computed: {
    innerRules () {
      if (this.rules) {
        return this.rules;
      }
      let formRules = this.formRules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },

    fieldValue () {
      return this.formModel.value[this.prop]
    }
  },

  mounted () {
    if (this.prop && this.formModel) {
      this.formModel.addFields(this.prop, this)
    }
  },

  methods: {

    validate (trigger = '', callback = function () {}) {
      let rules = this.innerRules

      if (!rules || rules.length === 0) {
        return callback();
      }

      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      
      let model = {};
      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, errors => {
        callback(errors);
      });
    }
  }
}
</script>