const renderHeader = (h, columns) => {
  return columns.map(column => (
    <th>{column.label}</th>
  ))
}

export default {
  name: 'BtTableHeader',

  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    }
  },

  render (h) {
    return (
      <thead class="bt-table__header">
        <tr>
          {
            renderHeader.call(this, h, this.columns)
          }
        </tr>
      </thead>
    )
  }
}
