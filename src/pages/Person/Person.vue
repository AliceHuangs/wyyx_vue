<template>
  <div>
    <SWHeader/>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block" @click="goLogoin(true)">
            <i class="loginPhone"></i>
            <span>帐号登录</span>
          </div>
          <div class="button-ghostRed" @click="goLogoin(false)">
            <i class="loginMail"></i>
            <span>短信登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="right3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import SWHeader from '../../components/SWHeader/SWHeader'
  import {mapState} from 'vuex'
  export default {
    name: "Person",
    data(){
      return{
        loginWay: null
      }
    },
    mounted (){

    },
    computed:{

    },
    methods:{
      goLogoin(loginWay1){
        this.loginWay = loginWay1
        //Vue.set(this.loginWay,'loginWay')
        this.$router.replace('/login')
        this.$store.dispatch('setLoginWay',this.loginWay)
      }
    },
    components: {
      SWHeader
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  html,body
    height 100%
    overflow hidden
  .loginTypesWrap
    padding-top 88px
    .cont
      position relative
      height 100%
      background #F2F5F4
      .logoWrap
        text-align center
        padding-top 2.13rem
        padding-bottom 2.13rem
        img
          width 3.57rem
          height 1.2rem
        .btnWrap
          margin-bottom .42rem
          padding 0 .53rem
          .loginPhone
            background-position 0 -58px
            margin-right .21rem
            position relative
            top -.03rem
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
            background-size .53rem 3.86rem
            width .53rem
            height .53rem
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            .name
              line-height 1.25rem
              font-size .37rem
              color #fff
        .ghostRed
          margin-bottom .42rem
          border-radius 2px
          display block
          width 100%
          height 1.25rem
          line-height 1.25rem
          color #b4282d
          vertical-align middle
          text-align center
          border 1px solid #b4282d
          overflow hidden
          .loginMail
            margin-right .21rem
            position relative
            top -.03rem
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
            background-size .53rem 3.86rem
            width .53rem
            height .53rem
            display: inline-block
            vertical-align middle
            background-repeat no-repeat
            line-height 1.25em
            color #b4282d
            text-align center
            font-size .37rem
            .name
              line-height: 1.25rem
              color #b4282d
              text-align center
              font-size .37rem
        .btn
          color #333
          font-size .37rem
          text-align center
          width 100%
          line-height 1.5
          .right3
            color #333
            font-size .37rem
            text-align center
            line-height 1.5
            .name
              margin-right .21rem
              position relative
              top -.03rem
              margin-left .05rem
              display inline-block
              vertical-align middle
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
              background-repeat no-repeat
              background-size 100% 100%
              width .37rem
              height .37rem
              color #333
              font-size .37rem
              text-align center
              line-height 1.5
      .btnWrap
        padding 0 .53rem
        margin-bottom 2.73rem
        .button-block
          margin-bottom .42rem
          border-radius 2px
          display block
          width 100%
          height 1.25rem
          line-height 1.25rem
          vertical-align middle
          text-align center
          font-size .37rem
          color #fff
          border 1px solid #b4282d
          background-color #b4282d
          overflow hidden
          .loginPhone
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-size .53rem 3.86rem
            width .53rem
            height .53rem
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            color #fff
            font-size .37rem
          span
            line-height 1.25rem
            text-align center
            font-size .37rem
            color #fff
        .button-ghostRed
          margin-bottom .42rem
          border-radius 2px
          display block
          width 100%
          height 1.25rem
          line-height 1.25rem
          color #b4282d
          vertical-align middle
          text-align center
          font-size .37rem
          border 1px solid #b4282d
          overflow hidden
          .loginMail
            margin-right .21rem
            position relative
            top -.03rem
            background-position 0 0
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
            background-size .53rem 3.86rem
            width .53rem
            height .53rem
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            span
              line-height 1.25rem
              color #b4282d
              text-align center
              font-size .37rem
        .btn
          color #333
          font-size .37rem
          text-align center
          width 100%
          line-height 1.5
          span
            color #333
            font-size .37rem
            text-align center
            line-height 1.5
          .right3
            margin-right .21rem
            position relative
            top -.03rem
            margin-left .05rem
            display inline-block
            vertical-align middle
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .37rem
            height .37rem
            color #333
            font-size .37rem
            text-align center

</style>
