const path = require('path')

exports.resolve = function () {
  return path.resolve(...arguments)
}
