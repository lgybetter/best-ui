<template>
  <div class="bt-table">
    <table>
      <div class="hidden-columns"
        ref="hiddenColumns">
        <slot></slot>
      </div>
      <table-header :columns="columns"></table-header>
      <table-body :columns="columns"
        :data="data">
      </table-body>
      <table-footer></table-footer>
    </table>
  </div>
</template>

<script>
import TableHeader from './table-header'
import TableBody from './table-body'
import TableFooter from './table-footer'

export default {

  name: 'BtTable',

  components: {
    TableHeader,
    TableBody,
    TableFooter
  },

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      columns: []
    }
  },

  mounted () {
    this.setColumns()
  },

  methods: {
    setColumns () {
      if (!this.$slots.default) {
        return
      }
      const defaultSlot = this.$slots.default
      this.columns = defaultSlot.map(({ componentInstance }) => {
        return componentInstance
      })
    }
  }
}
</script>
