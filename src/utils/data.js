export function generateArray (start, end) {
  return Array.from(new Array(end + 1).keys()).slice(start)
}
