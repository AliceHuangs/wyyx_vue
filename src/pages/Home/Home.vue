<template>
  <div class="home" style="overflow: hidden">
    <!--头部-->
    <div class="header">
      <div class="line">
        <div class="logo" href=""></div>
        <div class="inp">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共11790款好物</span>
        </div>
      </div>
      <div class="m-tab">
        <list-scroll/>
      </div>
    </div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.picUrl">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!--轮播图下小栏目-->
    <div class="great">
      <div class="gItem">
        <i></i>
        <span>网易自营品牌</span>
      </div>
      <div class="gItem">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="gItem">
        <i></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <!--品牌制造商直供-->
    <section class="Sale">
      <header>
        <a href="javascript:;">
          <span>品牌制造商直供</span>
          <i></i>
        </a>
      </header>
      <!--商品列表-->
      <div class="goods">
        <ul>
          <li v-for="(item, index) in home.topicList" :key="index">
            <a href="javascipt:;">
              <div class="ctn">
                <h4 class="title">{{item.title}}</h4>
                <div class="spanPrice">
                  <div class="price1">{{item.priceInfo}}</div>
                  <div class="price2">元起</div>
                </div>
              </div>
              <img :src='item.itemPicUrl' alt="img">
            </a>
          </li>
        </ul>
      </div>
    </section>
    <!--新品首发-->
    <section class="indexFloor">
      <div class="move new">
        <a href="javascript:;" class="moveCont">
          <span class="title">新品首发</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodList :home="home"/>
    </section>
    <!--人气推荐-->
    <section class="indexFloor">
      <div class="move hot">
        <a href="javascript:;" class="moveCont">
          <span class="title">人气推荐.好物精选</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodList2 :home="home"/>
    </section>
    <!--严选限时购-->
    <!--<countdown :time="resetTime * 1000"  v-bind:auto-start="false" ref="countdown">-->
    <!--<countdown>-->
      <!--<template slot-scope="props">-->
        <!--<div class="countDown">-->
          <!--<a href="javascript:;">-->
            <!--<div class="itemLeft">-->
              <!--<div class="title">严选限时购</div>-->
              <!--<div class="countNum">-->
                <!--<span class="time">1</span>-->
                <!--<span class="colon">:</span>-->
                <!--<span class="time">59</span>-->
                <!--<span class="colon">:</span>-->
                <!--<span class="time">48</span>-->
              <!--</div>-->
              <!--&lt;!&ndash;<div class="countNum">&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="time">{{ props.hours }}</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="colon">:</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="time">{{ props.minutes }}</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="colon">:</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="time">{{ props.seconds }}</span>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--<div class="nextTitle">下一场 22:00  开始</div>-->
            <!--</div>-->
            <!--<div class="itemRight">-->
              <!--<img src="../../assets/images/test2.png" alt="">-->
              <!--<div class="price">-->
                <!--<span class="now">¥42</span>-->
                <!--<span class="old">¥49</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</a>-->
        <!--</div>-->
      <!--</template>-->
    <!--</countdown>-->

    <!--福利社-->
    <div class="weal">
      <a href="javascript:;">
        <img src="../../assets/images/move.jpg" alt="">
      </a>
    </div>

    <!--专题精选-->
    <section class="GoodsSale">
      <header>
        <a href="javascript:;">
          <span>专题精选</span>
          <i></i>
        </a>
      </header>
      <!--专题精选.轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in home.topicList" :key="index">
            <img :src="item.itemPicUrl">
            <div class="line">
              <h4 class="title">{{item.title}}</h4>
              <span class="price">{{item.priceInfo}}元起</span>
            </div>
            <div class="desc">{{item.subtitle}}</div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>


    </section>

    <!--底部-->
    <div class="copyright">
      <div class="content">
        <div class="bd">
          <a href="javascript:;" class="goApp">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="desc">
          <span>网易公司版权所有 © 1997-2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>


  </div>
</template>

<script>

  import Swiper from 'swiper'
  import {mapState} from 'vuex'


  import ListScroll from '../../components/ListScroll/ListScroll.vue';//头部导航条
  import GoodList from '../../components/GoodList/GoodList';
  import GoodList2 from '../../components/GoodList2/GoodList2';


  export default {

    mounted() {
      this.$store.dispatch('getHome')

      //轮播图
      this.$store.dispatch('getBanner', () => {
        this.$nextTick(() => {
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
    },
    components: {
      ListScroll,
      GoodList,
      GoodList2
    },
    computed:{
      ...mapState(['banner', 'home'])
    }

    // data () {
    //   return {
    //     time: [2, 60, 60]
    //   }
    // },
    // created () {
    //   // this.resetTop()
    // },
    // mounted () {
    //   this.$store.dispatch('getHomeData', () => {
    //     this.$nextTick(() => {
    //       this._resetTime()
    //     })
    //   })
    //   this.$store.dispatch('getTopicData')
    //   this.$refs.countdown.start()
    // },
    // methods: {
    //   resetTop () {
    //     window.scrollTo(0, 0)
    //   },
    //   _resetTime () {
    //     this.timer = setTimeout (() => {
    //       clearTimeout(this.timer)
    //       this.time = [2, 60, 60]
    //     }, 2 * 60 * 60 * 1000)
    //   }
    // },
    // computed: {
    //   ...mapState(['homeData']),
    //   resetTime: {
    //     get: function () {
    //       let arr = []
    //       let result = 1
    //       for (const i in this.time) {
    //         if (this.time[i] !== 0) {
    //           arr.push(this.time[i])
    //         }
    //       }
    //       arr.forEach(item => {
    //         result *= item
    //       })
    //       return result
    //     },
    //     set: function () {
    //       let result = 1
    //       this.time.forEach(item => {
    //         result *= item
    //       })
    //       console.log(result)
    //       return result
    //     }
    //   }
    // }


  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .home
    /*头部*/
    .header
      /*height 1.48rem*/
      .line
        /*height 0.56rem*/
        display flex
        padding 0.16rem 0.3rem
        align-items center
        .logo
          width 1.4rem
          height 0.40rem
          background url('../../assets/images/icons.png')
          background-position -4px 290px
          background-size 108%
          margin-right 0.2rem
          display inline-block
        .inp
          flex-grow 1
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          width 5.32rem
          height 0.56rem
          background-color #ededed
          border-radius 6px
          .icon
            display inline-block
            width 0.24rem
            height 0.24rem
            background url('../../assets/images/search.png')
            margin-right 0.06rem
            background-size 0.26rem
          span
            color #666666
            font-size 0.26rem
      .m-tab
        width 100%
    /*轮播图*/
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          img
            display block
            width 100%
            text-align center
            padding-bottom 0.1rem
      .swiper-pagination
        > span
          &.swiper-pagination-bullet
            margin 0 .13rem 0 0
            width .5rem
            height .05rem
            display inline-block
            background #fff
            opacity .4
            border-radius 0
          &.swiper-pagination-bullet-active
            background #fff
            opacity 1
            border-radius 0
    /*轮播图下栏目*/
    .great
      width 100%
      height 0.72rem
      box-sizing border-box
      display flex
      background #ffffff
      padding 0 0.3rem
      flex-direction row
      flex-wrap nowrap
      align-items center
      justify-content space-around
      font-size 0.24rem
      margin-bottom 0.2rem
      .gItem
        vertical-align middle
        span
          display inline-block
        i
          display inline-block
          width 0.32rem
          height 0.32rem
          background-image url('../../assets/images/hook.png')
          background-repeat no-repeat
          background-size cover

    /*商品制造商直供*/
    .Sale
      background #ffffff
      margin-bottom 0.2rem
      header
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 1.1rem
        a
          color #444444
          span
            font-size 0.32rem
          i
            display inline-block
            width 0.3rem
            height 0.3rem
            background-image url("../../assets/images/right.png")
            background-repeat no-repeat
            background-size 0.3rem
      .goods
        padding-bottom 0.08rem
        ul
          position relative
          height 4.68rem
          margin 0 0.18rem
          overflow hidden
          li
            width 3.35rem
            height 2.36rem
            position relative
            display inline-block
            float left
            margin-bottom 0.08rem
            background-color #f4f4f4
            overflow hidden
            &:nth-child(odd)
              margin-right 0.08rem
            >a
              color #444444
              .ctn
                width 100%
                position absolute
                left 0
                top 0
                padding 0.2rem 0 0 0.2rem
                z-index 4
                font-size 0
                .title
                  ellipsis()
                  font-size 0.28rem
                  line-height 0.34rem
                  margin-bottom 0.06rem
                .spanPrice
                  .price1, .price2
                    font-size 0.28rem
                    line-height 0.34rem
                    margin-bottom 0.06rem
              > img
                width 100%
                height 100%

    /*新品首发、人气推荐 */
    .move
      width 100%
      height 2.6rem
      margin-bottom 0.32rem
      position relative
      &.new
        background-image url('../../assets/images/new.png')
        background-size 7.5rem 2.6rem
        a
          color #8ba0b4
        .all
          background #d8e5f2
      &.hot
        background-image url('../../assets/images/hot.png')
        background-size 7.5rem 2.6rem
        a
          color #B4A088
        .all
          background #F4E9CB
      .moveCont
        position absolute
        width 3.34rem
        height 1.26rem
        top 50%
        left 50%
        margin-left -1.67rem
        margin-top -0.63rem
        text-align center
        font-size 0.36rem
        .all
          position relative
          margin 0.16rem auto 0
          width 2.4rem
          height 0.56rem
          font-size 0
          line-height 0.56rem
          span
            font-size 0.28rem
          i
            display inline-block
            width 0.1rem
            height 0.22rem
            background-image url('../../assets/images/move.png')
            background-size 0.1rem 0.22rem
            margin-left 0.06rem


    /*严选限时购*/
    .countDown
      width 100%
      height 0.32rem
      padding 0.3rem 0.4rem 0.3rem 0.56rem
      box-sizing border-box
      margin-bottom 0.2rem
      overflow hidden
      background #ffffff
      a
        display block
        width 100%
        height 100%
        clearFix()
      .itemLeft
        float left
        padding-top 0.4rem
        .title
          font-size 0.36rem
          line-height 0.36rem
          margin-bottom 0.24rem
          letter-spacing 0.12rem
          color #444444
        .countNum
          display inline
          font-size 0
          .time
            display inline-block
            width 0.62rem
            height 0.56rem
            font-size 0.32rem
            text-align center
            line-height 0.56rem
            border-radius 0.04rem
            color #ffffff
            background #444444
          .colon
            display inline-block
            width 0.2rem
            color #444444
            font-size 30px
            font-weight 700
            text-align center
        .nextTitle
          height 0.24rem
          line-height 0.24rem
          margin-top 0.4rem
          color #444444
          font-size 0.24rem
      .itemRight
        width 0.32rem
        height 0.32rem
        position relative
        float right
        img
          width 100%
          height 100%
        .price
          width 0.96rem
          height 0.96rem
          position absolute
          background-color rgba(244,143,24,.8)
          border-radius 50%
          bottom 0.36rem
          right 0.2rem
          color #ffffff
          text-align center
          display flex
          flex-direction column
          justify-content center
          span
            font-size 0.24rem

    /*福利社*/
    .weal
      width 100%
      height 3rem
      margin-bottom 0.2rem
      overflow hidden
      img
        width 100%


    /*专题精选*/
    .GoodsSale
      /*专题精选.轮播图*/
      header
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 1.1rem
        a
          color #444444
          span
            font-size 0.32rem
          i
            display inline-block
            width 0.3rem
            height 0.3rem
            background-image url('../../assets/images/right.png')
            background-repeat no-repeat
            background-size: 0.31rem
      .subjects
        padding-left 0.3rem
        padding-bottom 0.36rem
        .swiper-wrapper
          padding-right 0.3rem
          .swiper-slide
            width 5.75rem
            box-sizing border-box
            padding-right 0.21rem
            img
              width 100%
              height 3.22rem
              border-radius 8px
              margin-bottom 0.16rem
            .line
              height 0.41rem
              margin-bottom 0.02rem
              font-size 0.28rem
              .title
                ellipsis()
                width 4.1rem
                float left
                color #444444
              .price
                float right
                color $main
            .desc
              ellipsis()
              height 0.36rem
              font-size 0.24rem
              color #7f7f7f

    /*底部*/
    .copyright
      border-top 1px solid rgba(0,0,0,.15);
      background-color #414141
      margin-bottom 1.1rem
      .content
        text-align center
        padding 0.54rem  0.2rem 0.28rem 0.2rem
        .bd
          a
            display inline-block
            width 1.7rem
            height 0.6rem
            border: 1px solid #888;
            color #ffffff
            font-size 0.24rem
            line-height 0.62rem
            &.goApp
              margin-right 0.5rem
        .desc
          margin-top 0.36rem
          color #999999
          line-height 0.32rem
          span
            font-size 0.24rem


</style>

<!--
#b4282d
-->

