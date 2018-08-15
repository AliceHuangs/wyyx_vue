<template>
  <div class="wrap">
    <SWHeader/>
    <div class="swiper">
      <div class="swiper-container" v-if="general.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in general.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GScroll :scroll="general.column"/>
    <GItem :general="general"/>
    <QuarterPastTen :general="general"/>
    <GLook :general="general"/>
    <GFind :general="general"/>
    <!--<goTop/>-->
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import SWHeader from '../../components/SWHeader/SWHeader.vue'
  import GScroll from '../../components/GScroll/GScroll.vue'
  import GItem from '../../components/GItem/GItem.vue'
  import QuarterPastTen from '../../components/QuarterPastTen/QuarterPastTen';
  import GLook from '../../components/GLook/GLook.vue'
  import GFind from '../../components/GFind/GFind.vue'
  // import goTop from '../../components/goTop/goTop.vue'
  export default {
    name: "General",
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['general'])
    },
    mounted () {
      this.$store.dispatch('getGeneral')
      new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.15,
        centeredSlides: true,
        onInit: function (swiper) {
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
    },
    watch: {
      general(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.15,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
        })
      }
    },
    methods:{

    },
    components:{
      SWHeader,
      GScroll,
      GItem,
      QuarterPastTen,
      GLook,
      GFind,
      // goTop,
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .wrap
    background #F4F4F4
    padding-bottom 90rem
    .swiper-container
      .swiper-wrapper
        margin-top 1.4rem
        .swiper-slide
          img
            width 100%
            position relative
          .content
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            display -ms-flexbox
            display flex
            align-items center
            justify-content center
            flex-direction column
            width 6.2rem
            height 2.64rem
            background-color rgba(255,255,255,.9)
              .subTitle
                position relative
                font-size .26rem
                color #7f7f7f
                line-height .4rem
                padding 0 .11rem
              .title
                font-size .43rem
                line-height .64rem
                color #444444
                margin-top .21rem
                font-weight 700
              .desc
                font-size .32rem
                color #444444
                line-height .48rem
                margin-top .05rem


</style>
