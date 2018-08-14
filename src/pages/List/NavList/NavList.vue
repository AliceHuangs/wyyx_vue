<template>
  <div class="listMenu">
    <div class="inner" ref="scroll">
      <ul>
        <li class="item" :class="{'active' : navIndex === index}" v-for="(name, index) in navList" :key="index" @click="currentIndex(index)">
          <a href="javascript:;">{{name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    // data () {
    //   return {
    //     navIndex: 3 // 默认的选中状态
    //   }
    // },
    mounted () {
      this.$store.dispatch('getNavList', () => {
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['navList', 'navIndex'])
    },
    methods: {
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        })
      },
      currentIndex (index) {
        this.$store.dispatch('setNavIndex', index)
        this.$store.dispatch('getNavDetail')
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .listMenu
    position fixed
    top 0.88rem
    left 0
    bottom 0
    z-index 4
    width 1.62rem
    background-color #ffffff
    &:after
      content ''
      position absolute
      background-color rgba(0,0,0,.15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      max-height 11.04rem
      padding-top 0.4rem
      overflow hidden
      >ul
        padding-bottom 1.38rem
        >.item
          width 100%
          height 0.76rem
          line-height 0.76rem
          text-align center
          border none
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width 0.06rem
              background-color #b4282d
            >a
              font-size 0.36rem
              line-height 0.76rem
              font-weight 700
              color #b4282d
          +.item
            margin-top 0.2rem
          >a
            display block
            color #333333
            font-size 0.28rem
            line-height 0.56rem
            ellipsis()
</style>
