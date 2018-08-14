<template>
  <header>
    <div class="row">
      <div class="home" @click="$router.push('/home')">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div class="logo"></div>
      <div class="right">
        <div class="search">
          <a href="javascript:;">
            <i></i>
          </a>
        </div>
        <div class="cart">
          <a href="javascript:;">
            <i></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
header
  height 0.88rem
  position fixed
  left 0
  top 0
  right 0
  z-index 5
  background #fafafa
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color #d9d9d9
    transform scaleY(0.5)
  .row
    box-sizing border-box
    width 7.5rem
    height 0.88rem
    padding-left 0.24rem
    padding-right 0.16rem
    overflow hidden
    display flex
    align-items center
    justify-content space-between
    position relative
    >.home
      width 0.48rem
      height 0.44rem
      display inline-block
      vertical-align middle
      i
        font-size 0.48rem
    .logo
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      width 1.72rem
      height 0.54rem
      display inline-block
      vertical-align middle
      background url('../../assets/images/icons.png')
      background-repeat no-repeat
      background-size 1.72rem 3.98rem
      background-position: 0px -63px;
    .right
      box-sizing border-box
      text-align center
      a
        display inline-block
        width 0.64rem
        height 0.64rem
      .search
        margin-right  0.2rem
        float left
        i
          width 0.64rem
          height 0.64rem
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../assets/images/icons.png')
          background-repeat no-repeat
          background-size 1.72rem 3.98rem
          background-position: 0px -330px;
      .cart
        float left
        i
          width 0.64rem
          height 0.64rem
          display block
          background-repeat: no-repeat;
          vertical-align middle
          background url('../../assets/images/icons.png')
          background-repeat no-repeat
          background-size 1.72rem 3.98rem
          background-position: 0px 3px;
</style>
