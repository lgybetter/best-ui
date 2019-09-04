<template>
  <div id="app">
    <div class="panel">
      <bt-button>Send Email</bt-button>
      <bt-button type="primary">Send Email</bt-button>
      <bt-button type="info">Send Email</bt-button>
      <bt-button type="primary" circle icon="el-icon-plus"></bt-button>
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
    <div class="panel">
      <bt-select v-model="select">
        <bt-option :value="0"
          label="Vue">
        </bt-option>
        <bt-option :value="1"
          label="React">
        </bt-option>
        <bt-option :value="2"
          label="Angular">
        </bt-option>
      </bt-select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      select: 0
    }
  }
}
</script>

<style lang="scss">
html, body {
  background-color: #f7f7f7;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}

.panel {
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
  padding: 20px;
  background-color: #fff;
  & + .panel {
    margin-top: 20px;
  }
}
</style>
