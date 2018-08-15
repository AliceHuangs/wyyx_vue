<template>
  <div>
    <div class="m-topBar">
      <div class="bd">
        <div class="row">
          <i class="shouye" @click="$router.replace('/home')"></i>
          <i class="logo"></i>
          <div class="right">
            <div class="search" @click="$router.replace('/home')">
              <i class="search1"></i>
            </div>
            <div class="cart" @click="$router.replace('/Shopcart')">
              <i class="cart1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SWHeader"
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .m-topBar
    position fixed
    top 0
    z-index 99
    .bd
      height: 1.16rem
      background-color #fafafa
      position relative
      .row
        background-color #fafafa
        z-index 1
        width 10rem
        margin auto
        overflow hidden
        padding 0 .21rem 0 .32rem
        height 1.17rem
        display flex
        -webkit-box-align center
        align-items center
        -webkit-box-pack justify
        justify-content space-between
        position relative
        .shouye
          width .64rem
          height .58667rem
          background-position 0 -.98rem
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
          background-repeat no-repeat
          background-size 2.29rem 5.31rem
          cursor pointer
        .logo
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
          width 2.29rem
          height .72rem
          background-position 0 -1.71rem
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
          background-repeat no-repeat
          background-size 2.29rem 5.31rem
          font-style normal

        .right
          width 20%
          margin-left auto
          margin-right .6rem
          margin-top -.2rem
          .search
            margin-right .26rem
            text-decoration none
            outline 0
            cursor pointer
            float left
            .search1
              position relative
              bottom 0
              width .85rem
              height .85rem
              background-position 0 -4.45rem
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
              background-repeat no-repeat
              background-size 2.29rem 5.3rem
              font-style normal
              cursor pointer
          .cart
            .cart1
              cursor pointer
              position relative
              width .85rem
              height: .85rem
              background-position 0 0
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
              background-repeat no-repeat
              background-size 2.29rem 5.3rem
              font-style normal

</style>
