<template>
  <!--<div class="wrapper" ref="wrapper">
    <ul class="tabs">
      &lt;!&ndash;<li v-for="(name, index) in list" :key="index" :class="{'active':current === index}" @click="currentIndex(index)">&ndash;&gt;
        &lt;!&ndash;<span>{{name}}</span>&ndash;&gt;
      &lt;!&ndash;</li>&ndash;&gt;
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
      <li>推荐</li>
    </ul>
  </div>-->

  <div class="header-tabs">
    <div class="tab">
            <span v-for="(good, index) in list" :key="index"
                  :class="{active: index === activeIndex}" @click="active(index)">{{good}}</span>
    </div>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  export default {
    data () {
      return {
        list: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        activeIndex: 0 // 被选中的下标
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScorll ('.header-tabs', {
          scrollX: true,
          click: true
        })
      })
    },
    methods: {
      active (index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'

  .header-tabs
    height 100%
    width 100%
    overflow hidden
    display flex
    .tab
      flex-shrink 0
      flex-flow row nowrap
      align-items center
      justify-content center
      z-index 1
      text-align center
      padding 0 0.4rem
      >span
        display inline-block
        padding 0 0.35rem
        line-height 0.6rem
        text-align center
        &.active
          color #b4282d
          border-bottom 0.01rem solid #b4282d

  /*.wrapper
    width 100%
    height 100%
    overflow hidden
    display flex
    !*flex-direction row*!
    !*flex-flow nowrap*!
    .tabs
      flex-shrink 0
      !*display flex*!
      flex-direction row
      flex-wrap nowrap
      justify-content center
      text-align center
      padding 0 0.3rem
      height 0.6rem
      align-items center
      li
        width 1.35rem
        height 0.6rem
        z-index 100
        display inline-block
        border 1px solid red
        !*display flex*!
        !*flex-direction row*!
        !*flex-wrap nowrap*!
        !*justify-content space-between*!
       !* &.active
          span
            color $main
            position relative
            &:after{
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height 0.04rem
              background-color $main
            }
        span
          display inline-block
          letter-spacing 0.02rem
          padding 0 0.16rem
          line-height 0.6rem
          font-size 0.26rem
          text-align center
          color #333333*!*/
</style>

