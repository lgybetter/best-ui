<template>
  <div class="bt-select">
    <bt-input
      value="test"
      :readonly="readonly">
    </bt-input>
    <bt-select-dropdown>
      <slot></slot>
    </bt-select-dropdown>
  </div>
</template>

<script>
import BtInput from '~/input'
import BtSelectDropdown from './select-dropdown'

export default {

  name: 'BtSelect',

  components: {
    BtInput,
    BtSelectDropdown
  },

  computed: {
    readonly () {
      return true
    }
  }
}
</script>
