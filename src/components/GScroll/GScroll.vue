<template>
  <div>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll">
          <div class="imgContainer">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "GScroll",
    props:{
      scroll: Array,
      createScroll: Function
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true
        })
      })
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .m-exploreChannels
    overflow hidden
    padding .42rem .4rem .37rem
    height: 2.81rem
    background-color #fff
    margin-bottom .26rem
    display flex
    .scroll-wrap
      margin-left auto
      margin-right auto
      position relative
      z-index 1
      transform translate3d(0px, 0px, 0px)
      transition-duration 0ms
      display flex
      flex-wrap nowrap
      .scroll-item
        position relative
        width 2.18rem
        height 2.8rem
        margin-right .32rem
        .imgContainer
          img
            background-size cover
            -webkit-background-size cover
            -o-background-size cover
            -moz-background-size cover
            background-position center
            background-repeat no-repeat
            width: 2.18rem
            height: 2.18rem
            margin-bottom: .29rem
            border-radius: .05rem
        .title
          color #333
          font-size .32rem
          line-height 1
          text-align center
          width 2.45rem
          margin-left -.13rem
          margin-top: -.2rem
        .rbGradient
          position absolute
          top 0
          right 0
          color #fff
          width 1.54rem
          height .42rem
          border-radius 0 .05rem 0 0
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat
          background-size 100%
          display inline-block
          vertical-align middle
          .topNum
            font-size .32rem
            position absolute
            top 0
            right .10rem
            width 2rem
            height .42rem
            line-height .42rem
            text-align right

</style>
