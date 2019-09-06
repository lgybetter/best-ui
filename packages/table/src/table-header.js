const renderHeader = (h, columns) => {
  return columns.map(column => {
    if (column.$scopedSlots.header) {
      return (
        <th>
          {column.$scopedSlots.header({
            label: column.label,
            prop: column.prop
          })}
        </th>
      )
    } else if (column.$slots.header) {
      return h('th', column.$slots.header, {
        scopedSlots: column
      })
    }
    return (<th>{column.label}</th>)
  })
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
