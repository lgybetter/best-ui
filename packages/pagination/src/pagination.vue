<template>
  <div class="bt-pagination" v-if="pagerNum">
    <div class="bt-pagination__wrapper">
      <ul class="bt-pager">
        <button
          type="button"
          :class="['btn-pre', {'is-disabled': leftDisabled}]"
          @click="handlePagePre">
          <i class="el-icon-arrow-left"></i>
        </button>
        <template v-if="showLeftOffset">
          <li v-if="showLeftOffset"
            :class="[
              'bt-pager__number'
            ]"
            @click="handleNumberClick(1)">
            1
          </li>
          <button type="button"
            class="btn-pager-pre"
            @click="handlePagerPre">
            <i class="el-icon-more"></i>
          </button>
        </template>
        <li v-for="(item, index) in pageList"
          :key="index"
          :class="[
            'bt-pager__number',
            { 'is-actived': item === page}
          ]"
          @click="handleNumberClick(item)">
          {{item}}
        </li>
        <template v-if="showRightOffset">
          <button type="button"
            class="btn-pager-next"
            @click="handlePagerNext">
            <i class="el-icon-more"></i>
          </button>
          <li
            :class="[
              'bt-pager__number'
            ]"
            @click="handleNumberClick(pagerNum)">
            {{pagerNum}}
          </li>
        </template>
        <button
          type="button"
          :class="['btn-next', {'is-disabled': rightDisabled}]"
          @click="handlePageNext">
          <i class="el-icon-arrow-right"></i>
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtPagination',

  props: {
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: 0
    },
    pagerSize: {
      type: Number
    }
  },

  computed: {
    innerPagerSize () {
      if (this.pagerSize) {
        return this.pagerSize
      }
      return this.defaultPagerSize
    },
    pagerNum () {
      return parseInt(this.total / this.pageSize)
    },
    offset () {
      return parseInt(this.innerPagerSize / 2)
    },
    showLeftOffset () {
      return this.page > this.offset + 1
    },
    showRightOffset () {
      return this.page + this.offset < this.pagerNum
    },
    leftDisabled () {
      return this.page === 1
    },
    rightDisabled () {
      return this.page === this.pagerNum
    },
    pageList () {
      const start = !this.showRightOffset ? this.pagerNum - this.innerPagerSize + 1 : this.showLeftOffset ? this.page - this.offset : 1
      const end = !this.showLeftOffset ? this.innerPagerSize : this.showRightOffset ? this.page + this.offset : this.pagerNum
      return Array.from(new Array(end + 1).keys()).slice(start)
    }
  },

  data () {
    return {
      defaultPagerSize: 5
    }
  },

  mounted () {
    this.initDefaultPagerSize()
    this.initEvents()
  },

  methods: {
    initEvents () {
      window.addEventListener('resize', () => {
        this.initDefaultPagerSize()
      })
    },
    initDefaultPagerSize () {
      const offsetWidth = document.body.offsetWidth
      const itemWidth = 100
      const pagerNum = parseInt(offsetWidth / itemWidth)
      if (pagerNum > 10) {
        this.defaultPagerSize = 10
        return
      }
      if (pagerNum < 0) {
        this.defaultPagerSize = 13
        return
      }
      this.defaultPagerSize = pagerNum
    },
    handlePagePre () {
      if (!this.leftDisabled) {
        this.$emit('update:page', this.page - 1)
      }
    },
    handlePageNext () {
      if (!this.rightDisabled) {
        this.$emit('update:page', this.page + 1)
      }
    },
    handlePagerPre () {
      if (this.showLeftOffset) {
        this.$emit('update:page', this.page - this.offset)
      }
    },
    handlePagerNext () {
      if (this.showRightOffset) {
        this.$emit('update:page', this.page + this.offset)
      }
    },
    handleNumberClick (page) {
      this.$emit('update:page', page)
    }
  }
}
</script>
