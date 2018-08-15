<template>
  <div class="listDetail" v-if="nav.categoryL1List">
    <div class="warp">
      <div class="banner">
        <img :src="nav.categoryL1List[index].bannerUrl" alt="">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{nav.categoryL1List[index].name}}</span>
            <span>分类</span>
          </span>
        </div>
      <section class="detail">
        <ul class="list">
          <li class="item" v-for="(item,index2) in nav.categoryL1List[index].subCateList" :key="index2" >
            <a href="javascript:;">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>

  export default {

    props:{
      nav: Object,
      index: Number
    },


  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../../common/stylus/mixins.styl'
  @keyframes animTop
    30%
      transform  translate3d(0, -1rem, 0)
    60%
      transform translate3d(0, 1rem, 0)
    80%
      transform  translate3d(0, -0.2rem, 0)
    100%
      transform translate3d()
  .listDetail
    margin-left px2rem(162)
    height 11.04rem
    background #ffffff
    &.anim
      animation animTop .8s
    .warp
      padding 0.3rem 0.3rem 0.21rem
      height auto
      background #ffffff
      .banner
        width 100%
        height 1.92rem
        border-radius 4px
        img
          width 100%
          height 100%
      .detailTit
        height 1.08rem
        line-height 1.08rem
        text-align center
        font-size 0.24rem
        color #444444
        .text
          position relative
          font-size 0
          >span
            font-size 0.24rem
          &:before,&:after
            position absolute
            content ''
            top -0.2rem
            bottom 0
            margin auto
            height 1px
            width 0.4rem
            background-color #d9d9d9
          &:before
            left -0.56rem
          &:after
            right -0.56rem
      .detail
        >.list
          >.item
            display inline-block
            margin-right 0.34rem
            font-size 0
            width 1.44rem
            vertical-align top
            &:nth-child(3n)
              margin-right -0.1rem
            >a
              color #333333
              >img
                width 1.44rem
                height 1.44rem
              >span
                display block
                height 0.72rem
                line-height 0.34rem
                text-align center
                font-size 0.24rem
</style>
