<template>
  <div class="personal">
    <Header></Header>
    <section class="cont">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btn">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist">
          <i class="iconfont icon-youxiang space"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    components: {
      Header
    },
    created () {
      this.resetTop()
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .personal
    width 100%
    height 100%
    box-sizing border-box
    padding-top 0.88rem
    background #f2f5f4
    position relative
    .cont
      >.logo
        text-align center
        padding 1.2rem 0
        >img
          width 3rem
          height 1.04rem
      >.btns
        padding 0.42rem
        >.btn
          margin-bottom 0.4rem
          text-align center
          border-radius 0.06rem
          width 100%
          height 0.86rem
          line-height 0.86rem
          vertical-align middle
          text-align center
          font-size 0.28rem
          color #444444
          border 1px solid black
          background-color #b4282d
          &.dist
            background-color #f2f5f4
            color $main
          >i
            width 0.4rem
            height 0.4rem
            box-sizing border-box
            font-size 0.4rem
            vertical-align inherit
            &.space
              margin-right 0.1rem
      >.quickLoign
        color #333333
        font-size 0.28rem
        width 100%
        text-align center
        >i
          font-size 0.28rem
          margin-right 0.16rem
          margin-left 0.04rem
          color #444444
    .otherLogin
      position absolute
      width 100%
      height 0.6rem
      left 0
      bottom 1rem
      text-align center
      .itemOther
        height 0.26rem
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 0.6rem
        font-size 0.26rem
        >i
          font-size 0.26rem
        &:last-child
          border-right none
</style>
