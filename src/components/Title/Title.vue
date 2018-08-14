<template>
  <!--<h3 class="title">{{title}}</h3>-->
  <h3 class="title">购物车</h3>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .title
    font-size 0.28rem
    line-height 1.2rem
    text-align center
    background #ffffff
    color #333333
</style>
