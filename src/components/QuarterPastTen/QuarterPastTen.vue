<template>
  <div class="scrollWrap">
    <div class="scroll-item" v-for="(item,index) in general.tenfifteen" :key="index">
      <div class="line-title">
  <div id="pad">
    <div class="m-exploreTenFifteen">
      <div class="module-title">十点一刻</div>
      <div class="innerWrap">
              <span class="inner1">- 今日话题 -</span>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">
              <div class="inner">
                <div class="avatars">
                  <div class="avatar" v-for="(avatarItem,index) in item.participantAvatar" :key="index">
                    <img :src="avatarItem" alt="">
                  </div>
                  <div class="avatar1">
                    <div class="doc"></div>
                    <div class="doc"></div>
                    <div class="doc"></div>
                  </div>
                </div>
                <div class="join">
                  <span>{{item.participantNum}}</span>
                  <span>人参与话题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "QuarterPastTen",
    props:{
      general: Object
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.innerWrap', {
          click: true,
          scrollX: true
        })
      })
    },
    components:{

    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .m-exploreTenFifteen
    overflow hidden
    padding 0 .4rem .53rem
    height 7.61rem
    background-color #fff
    margin-bottom .26rem
    .innerWrap
      display flex
      .scrollWrap
        display flex
        justify-content space-between
        align-items center
        transform translate3d(0px, 0px, 0px)
        transition-duration 0ms
        .scroll-item
          display inline-block
          vertical-align middle
          background-repeat no-repeat
          background-size 100% 90%
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
          position relative
          width 7.73rem
          height 5.48rem
          padding .50rem .53rem 1.05rem
          margin-right .4rem
          text-align center
          color: #333
          .line-title
            display flex
            align-items center
            justify-content center
            margin-bottom: .53rem
            .inner1
              margin 0 .11rem
              font-size .32rem
              color #7f7f7f
          .title
            font-size .48rem
            font-weight 700
            margin-bottom .18rem
          .desc
            font-size .37rem
            line-height 1.5
            display block
            overflow hidden
            text-overflow ellipsis
          .joinInfo
            position absolute
            bottom 3.05rem
            width 6.66rem
            text-align center
            .inner
              display inline-block
              overflow hidden
              .avatars
                float left
                margin-right .21rem
                .avatar
                  float left
                  img
                    position relative
                    float left
                    height .6rem
                    width .64rem
                    border 1px solid #fff
                    border-radius 50%
                    z-index 4
                .avatar1
                  background-color #d9d9d9
                  display flex
                  justify-content center
                  align-items center
                  border-radius 50%
                  position relative
                  float left
                  height .64rem
                  width .64rem
                  overflow hidden
                  border 1px solid #fff
                  .doc
                    width .08rem
                    height .08rem
                    border-radius 50%
                    margin-right .053rem
                    background-color #fff
              .join
                float left
                text-align left
                line-height .64rem
                font-size .32rem
                color #7f7f7f
                span
                  text-align left
                  line-height .64rem
                  font-size .32rem
                  color #7f7f7f

</style>
