<template>
  <div class="bt-table">
    <table>
      <slot></slot>
      <table-header></table-header>
      <table-body></table-body>
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
  }
}
</script>
