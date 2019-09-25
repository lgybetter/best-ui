<template>
  <div class="bt-panel">
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script>
export default {
  name: 'BtPanel'
}
</script>
