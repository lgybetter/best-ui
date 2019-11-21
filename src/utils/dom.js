export function createOutClickListener (selector, callback) {
  return function (event) {
    const container = document.querySelector(selector)
    const node = event.target
    if (node) {
      if (container !== node && !container.contains(node)) {
        callback()
      }
    }
  }
}
