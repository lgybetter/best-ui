<template>
  <div id="app">
    <bt-panel>
      <bt-button>Send Email</bt-button>
      <bt-button type="primary">Send Email</bt-button>
      <bt-button type="info">Send Email</bt-button>
      <bt-button type="warn">Send Email</bt-button>
      <bt-button type="primary" circle icon="el-icon-plus"></bt-button>
    </bt-panel>
    <bt-panel>
      <bt-input placeholder="Enter something"></bt-input>
    </bt-panel>
    <bt-panel>
      <bt-input type="textarea"
        placeholder="Enter something">
      </bt-input>
    </bt-panel>
    <bt-panel>
      <bt-input type="textarea"
        :rows="4"
        placeholder="Enter something">
      </bt-input>
    </bt-panel>
    <bt-panel>
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
    </bt-panel>
    <bt-panel>
      <bt-table :data="list">
        <bt-table-column
          label="Name"
          prop="name">
          <span slot="header" slot-scope="{label}">{{label}}</span>
          <span slot-scope="{name, href}">
            <a :href="href">{{name}}</a>
          </span>
        </bt-table-column>
        <bt-table-column
          label="Age"
          prop="age">
        </bt-table-column>
        <bt-table-column
          label="City"
          prop="city">
        </bt-table-column>
      </bt-table>
    </bt-panel>
    <bt-panel>
      <bt-tag icon="el-icon-close">open</bt-tag>
      <bt-tag icon="el-icon-close" type="primary">open</bt-tag>
      <bt-tag icon="el-icon-close" type="info">open</bt-tag>
      <bt-tag icon="el-icon-close" type="warn">open</bt-tag>
    </bt-panel>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      select: 0,
      list: [
        { name: 'Tom', age: 24, href: 'https://www.qq.com', city: 'SZ' },
        { name: 'Jhon', age: 25, href: 'https://lgybetter.com', city: 'GZ' },
        { name: 'Sam', age: 26, href: 'https://www.github.com', city: 'SH' }
      ]
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
  padding: 40px 20px;
}
</style>
