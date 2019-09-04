<template>
  <div id="app">
    <div class="panel">
      <bt-button>Send Email</bt-button>
      <bt-button type="primary">Send Email</bt-button>
      <bt-button type="info">Send Email</bt-button>
      <bt-button type="primary" circle>Se</bt-button>
    </div>
    <div class="panel">
      <bt-input placeholder="Enter something"></bt-input>
    </div>
    <div class="panel">
      <bt-input type="textarea"
        placeholder="Enter something">
      </bt-input>
    </div>
    <div class="panel">
      <bt-input type="textarea"
        :rows="4"
        placeholder="Enter something">
      </bt-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.panel {
  border: 1px solid #ddd;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
  overflow: hidden;
  padding: 20px;
  & + .panel {
    margin-top: 20px;
  }
}
</style>
