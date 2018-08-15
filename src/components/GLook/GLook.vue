<template>
  <div>
    <div class="m-exploreLook" v-if="general.yxLook">
      <div class="module-title">严选LOOK</div>
      <div class="content">
        <img :src="general.yxLook.picUrl" alt="">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="general.yxLook.avatar" alt="">
              </div>
              <div class="nickname">{{general.yxLook.nickname}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GLoolk",
    props:{
      general: Object
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .content
    position relative
    display block
    color #333
    img
      width 100%
    .topicInfo
      overflow hidden
      position relative
      padding .32rem .4rem .61rem
      background-color #fff
      .author-container
        margin-bottom .32rem
        .author
          height 0.64rem
          font-size 0.32*75/rem
          display flex
          align-items center
          .avatar
            width: 0.64rem
            height: 0.64rem
            margin-right 0.11rem
            border-radius 50%
            overflow hidden
            border 1px solid #d9d9d9
            img
              display block
              width 100%
          .nickname
            color #333
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
</style>
