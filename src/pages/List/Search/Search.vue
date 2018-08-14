<template>
  <header class="search">
    <div class="inner">
      <div class="ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共9723款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  .search
    position fixed
    top 0
    left 0
    z-index 5
    width 100%
    height 0.88rem
    .inner
      display flex
      align-items center
      padding 0 0.3rem
      width 100%
      height 0.88rem
      position relative
      background-color #ffffff
      &:after
        content ''
        position: absolute
        background-color #d9d9d9
        left 0
        width 100%
        height 1px
        transform-origin 50% 100% 0
        bottom 0
      .ipt
        width 6.9rem
        display flex
        align-items center
        justify-content center
        height 0.56rem
        font-size 0.28rem
        background-color #ededed
        border-radius 0.08rem
        >.icon
          display inline-block
          vertical-align middle
          width 0.28rem
          height 0.28rem
          background url('../../../assets/images/search.png')
          background-repeat no-repeat
          margin-right 0.1rem
          background-size 0.3rem
        >.placeholder
          font-size 0.27rem
          color #666666
</style>
