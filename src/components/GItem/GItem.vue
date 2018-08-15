<template>
  <div>
    <div class="m-exploreRcmds" v-if="general.recommendOne">
      <div class="container">
        <div class="module-title">{{general.recommendOne.nickname}}</div>
        <div class="m-mainPosItem">
          <div class="imgContainer">
            <div class="topicTag">
              <div class="m-exploreTag">{{general.recommendOne.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topicInfo">
        <div class="line1">
          <div class="title">{{general.recommendOne.typeName}}</div>
          <div class="price">
            <div class="num">{{general.recommendOne.priceInfo}}</div>
            <div class="unit">元起</div>
          </div>
        </div>
        <div class="line2">
          <div class="subTitle" v-if="general.recommendOne">{{general.recommendOne.subTitle}}</div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="general.recommendTwo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="general.recommendTwo.avatar">
              </div>
              <div class="nickname">{{general.recommendTwo.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{general.recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{general.recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="general.recommendTwo.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{general.recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="general.recommendThree">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="general.recommendThree.avatar">
              </div>
              <div class="nickname">{{general.recommendThree.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{general.recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{general.recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img v-lazy="general.recommendThree.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{general.recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GItem",
    props:{
      general: Object
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .m-exploreRcmds
    padding 0 .4rem .53rem
    margin-bottom .26rem
    background-color #fff
    .container
      .m-mainPosItem
        margin-bottom .4rem
        display block
        position relative
        color #333
        border 1px solid #d9d9d9
        border-radius .11rem
        overflow hidden
        .imgContainer
          background-image url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75)
          background-size cover
          background-position center
          background-repeat no-repeat
          position relative
          height 5.14rem
          border-radius .11rem .11rem 0 0
          overflow hidden
          .topicTag
            position absolute
            left .27rem
            .m-exploreTag
              display inline-block
              padding 0 .21rem
              height .48rem
              line-height .48rem
              background-color rgba(255,255,255,.9)
              border 1px solid #d9d9d9
              border-radius .26rem
              color #333
              font-size .42rem

    .topicInfo
      //padding-bottom: 0.8933333333333333*75/@rem;
      overflow hidden
      position relative
      padding .32rem .26rem 0
      background-color #fff
      .line1
        margin-bottom .25rem
        display flex
        align-items center
        line-height 1.2
        justify-content space-between
        .title
          margin-right .3rem
          font-size .48rem
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .price
          margin-right .3rem
          font-size .48rem
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          .num
            float left
            font-size .48rem
          .unit
            float left
            font-size .48rem

      .line2
        .subTitle
          position relative
          font-size .37rem
          line-height 1.2
          color #7f7f7f
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
    .m-minorPosItem
      display flex
      background-color #fff
      color #333
      border 1px solid #d9d9d9
      border-radius .05rem
      margin-bottom .4rem
      .topicInfo
        flex 1
        display flex
        justify-content center
        overflow hidden
        position relative
        padding-left .26rem
        padding-right .4rem
        .author-container
          margin-bottom .33rem
          flex 1
          display flex
          flex-direction column
          justify-content center
          overflow hidden
          position relative
          padding-left: .26rem
          padding-right: .4rem
          .author
            height 0.64rem
            font-size 0.26rem
            display flex
            align-items center
            .avatar
              width 0.64rem
              height 0.64rem
              margin-right 0.11rem
              border-radius 50%
              img
                display block
                width 100%
                height 100%
                border-radius 50%
            .nickname
              color #333
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
          .line1
            margin-bottom .18rem
            line-height 1.2
            .title
              margin-right .4rem
              font-size .42rem
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
          .line2
            .subTitle
              overflow hidden
              text-overflow ellipsis
              position relative
              font-size .32rem
              line-height 1.5
              color #7f7f7f
              white-space normal
              height 182px
        .minorPic
          position relative
          width 3.73rem
          height 3.62rem
          .imgContainer
            width 100%
            //background-image: url(//yanxuan.nosdn.127.net/7af712a….jpg?imageView&quality=75);
            img
              width 100%
              background-position center
              background-repeat no-repeat
            .topicTag
              position absolute
              top .03rem
              left .13rem
              margin-top -.3rem
              .m-exploreTag
                font-size .32rem
                display inline-block
                padding 0 .21rem
                height .48rem
                line-height .48rem
                background-color rgba(255,255,255,.9)
                border 1px solid #d9d9d9
                border-radius .26rem
                color #333

</style>
