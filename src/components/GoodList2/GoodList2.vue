<template>
<div class="wrap2" style="overflow:hidden">
  <div class="listItem">
    <div class="item swiper-slide" v-for="(item,index) in home.newItemList" :key="index">
      <img :src="item.primaryPicUrl" alt="">
      <div class="name">{{item.name}}</div>
      <div class="nameDoc">{{item.simpleDesc}}</div>
      <div class="price">¥{{item.retailPrice}}</div>
    </div>

      <div class="item">
        <div >查看全部</div>
      </div>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll';
    export default {
      props: {
        home: Object
      },
      mounted(){
        new BScroll('.wrap2',{
          click: true,
          scrollX:true,
          eventPassthrough: 'vertical'
        })
      }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap2
    width 100%
    overflow hidden
    .listItem
      padding-left 0.3rem
      display flex
      align-items center
      float left
      margin-bottom .5rem
      .item
        border 1px solid #eee
        width 2.8rem
        height 4.8rem
        margin-right .2rem
        img
          width 2.8rem
          heignt 2.8rem
        .name
          margin 0.1rem 0
          padding 0 0.1rem
          color #444444
          font-size 0.28rem
          line-height 0.34rem
        .nameDoc
          margin-bottom 0.14rem
          line-height 0.3rem
          font-size 0.24rem
          padding 0 0.1rem
          color #8f8f9f
        .price
          padding 0 0.1rem
          color $main
          line-height 1
          font-size 0.28rem
        &:last-of-type
          border 0.08rem solid #f4f4f4
          height 2.64rem
          line-height 2.64rem
          text-align center
          span
            font-size 0.28rem
            color #444444
</style>

