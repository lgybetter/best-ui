<template>
  <div class="bt-table">
    <slot></slot>
    <table-header></table-header>
    <table-body></table-body>
    <table-footer></table-footer>
  </div>
</template>

<script>
export default {
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
