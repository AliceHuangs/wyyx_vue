<template>
  <div class="shopCart">
    <Title title="购物车"></Title>
    <ul class="explain">
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <div class="txtBtn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from '../../components/Title/Title.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      Title,
      FooterGuide
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
  .shopCart
    position relative
    height 100%
    background-color #ededed
    >h3
      font-size 0.36rem
      line-height 0.88rem
    >.explain
      z-index 1
      height 0.7rem
      padding 0.3rem
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      >.expItem
        display flex
        align-items center
        font-size 0.24rem
        color #666666
        >i
          display inline-block
          width 0.1rem
          height 0.1rem
          font-size 0.1rem
          color #d8d8d8
          margin-right 0.2rem
    .cart
      position absolute
      top -0.5rem
      right 0
      bottom 0
      left 0
      margin auto
      height 3rem
      text-align center
      >.img
        display inline-block
        width 2.48rem
        height 2.48rem
        margin-bottom 0.08rem
        background url('../../assets/images/cart.png')
        background-position center
        background-repeat no-repeat
        background-size 2.8rem
      >.txt
        font-size 0.28rem
        line-height 1
        color #7f7f7f
        >.inner
          margin-top -0.2rem
          >.txtCon
            margin-bottom 0.5rem
            line-height 1
            font-size 0.28rem
            color #999999
          >.txtBtn
            margin auto
            width 4.8rem
            height 0.92rem
            font-size 0.3rem
            line-height 0.92rem
            color #ffffff
            background-color #b4282d
            border-radius 0.04rem
</style>
