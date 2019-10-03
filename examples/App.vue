<template>
  <div id="app">
    <bt-panel>
      <bt-button>Send Email</bt-button>
      <bt-button type="primary">Send Email</bt-button>
      <bt-button type="info">Send Email</bt-button>
      <bt-button type="warn">Send Email</bt-button>
      <bt-button type="primary" circle icon="el-icon-plus"></bt-button>
      <bt-button disabled type="primary">Send Email</bt-button>
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
      <bt-input disabled
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
      <bt-select v-model="select" disabled>
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
      <bt-pagination :page.sync="page"
        :page-size.sync="pageSize"
        :total="1000">
      </bt-pagination>
    </bt-panel>
    <bt-panel>
      <bt-tag icon="el-icon-close">open</bt-tag>
      <bt-tag icon="el-icon-close" type="primary">open</bt-tag>
      <bt-tag icon="el-icon-close" type="info">open</bt-tag>
      <bt-tag icon="el-icon-close" type="warn">open</bt-tag>
    </bt-panel>
    <bt-panel>
      <bt-checkbox v-model="checked">React</bt-checkbox>
      <bt-checkbox v-model="check1">Vue</bt-checkbox>
      <bt-checkbox v-model="check2" disabled>Angular</bt-checkbox>
    </bt-panel>
    <bt-panel>
      <bt-radio v-model="radio" :label="1">React</bt-radio>
      <bt-radio v-model="radio" :label="2">Vue</bt-radio>
      <bt-radio v-model="radio" :label="3" disabled>Angular</bt-radio>
    </bt-panel>
    <bt-panel>
      <bt-row>
        <bt-col :span="8">
          <bt-input placeholder="Enter something"></bt-input>
        </bt-col>
        <bt-col :span="8">
          <bt-input placeholder="Enter something"></bt-input>
        </bt-col>
        <bt-col :span="8">
          <bt-input placeholder="Enter something"></bt-input>
        </bt-col>
      </bt-row>
    </bt-panel>
    <bt-panel>
      <bt-form :model="formModel" :rules="formRules">
        <bt-form-item label="Name" prop="name">
          <bt-input slot-scope="{model}" v-model="model.name"></bt-input>
        </bt-form-item>
        <bt-form-item label="Age" prop="age">
          <bt-input slot-scope="{model}" v-model="model.age"></bt-input>
        </bt-form-item>
        <bt-form-item>
          <bt-button style="width: 100%;" type="info" @click="handleSubmit">Submit</bt-button>
        </bt-form-item>
      </bt-form>
    </bt-panel>
    <bt-panel>
      <bt-calendar>
      </bt-calendar>
    </bt-panel>
  </div>
</template>

<script>

import { createFormModel } from '~/form'

export default {
  name: 'app',
  data () {
    return {
      check1: false,
      check2: false,
      checked: true,
      radio: 1,
      select: 0,
      list: [
        { name: 'Tom', age: 24, href: 'https://www.qq.com', city: 'SZ' },
        { name: 'Jhon', age: 25, href: 'https://lgybetter.com', city: 'GZ' },
        { name: 'Sam', age: 26, href: 'https://www.github.com', city: 'SH' }
      ],
      formModel: createFormModel({
        name: 'Best',
        age: '2'
      }),
      formRules: {
        name: [
          { required: true, message: 'name required' }
        ],
        age: [
          { required: true, message: 'age required', trigger: 'blur' }
        ]
      },
      page: 2,
      pageSize: 5
    }
  },
  methods: {
    handleSubmit () {
      this.formModel.validate()
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
