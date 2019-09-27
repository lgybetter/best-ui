import schema from 'async-validator'

/**
 *
 * @param {*} model
 */
function transformModel (model) {
  Object.entries(model).forEach(([key, value]) => {
  })
}

class FormModel {
  model = {}
  constructor (model) {
    this.model = model
  }
  validate () {

  }
}

export function createModel (model) {
  const { fields, rules } = transformModel(model)
  return new FormModel(fields, rules)
}

export default FormModel
