<template>
<div>
  <div class="m-explorMore" v-if="general.findMore">
    <div class="line-title">
      <div class="inner">更多精彩</div>
    </div>
    <div class="wrap">
      <div class="content" v-for="(item,index) in general.findMore">
        <div class="imgContainer">
          <img :src="item.itemPicUrl" alt="">
          <!--<div class="right" v-if="item.picList">-->
            <!--<div class="img" v-for="(item,index) in item.picList">-->
              <!--<img :src="item" alt="">-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div class="desc">{{item.subTitle}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "GFind",
    props:{
      general: Object
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .m-explorMore
    margin 0 .4rem .4rem
    .line-title
      height 1.86rem
      position relative
      width 100%
      .inner
        font-size .37rem
        color #333
        position absolute
        top 50%
        left 43%
        transform translateX(-50%)
        transform translateY(-50%)
    .wrap
      .content
        display block
        color #333
        margin-bottom .4rem
        .imgContainer
          display block
          padding .32rem
          background-color #fff
          color #333
          text-decoration none
          outline 0
          cursor pointer
          img
            width 8.56rem
            height 4.8rem
            background-color #f4f4f4
          .right
            float right
            width: 2.37rem
            .img
              padding 4px
              img
                width 100%
        .desc
          background-color #fff
          font-size .37rem
          padding-top .38rem
          padding-bottom .37rem
          line-height 1.2
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          color #333
          font-family PingFangSC-Light,helvetica,'Heiti SC'
          padding-left .5rem

</style>
