const renderRow = (h, rows, columns) => {
  return rows.map(row => (
    <tr>
      {
        columns.map(column => (
          <td>{row[column.prop] || '--'}</td>
        ))
      }
    </tr>
  ))
}

export default {
  name: 'BtTableBody',

  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  render (h) {
    return (
      <tbody class="bt-table__body">
        {
          renderRow.call(this, h, this.data, this.columns)
        }
      </tbody>
    )
  }
}
