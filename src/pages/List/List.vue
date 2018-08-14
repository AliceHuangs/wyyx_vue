<template>
  <section class="list">
    <Search></Search>
    <section class="main">
      <NavList></NavList>
      <Detail></Detail>
    </section>
  </section>
</template>

<script>
  import Search from './Search/Search.vue'
  import NavList from './NavList/NavList.vue'
  import Detail from './Detail/Detail.vue'
  export default {
    components: {
      Search,
      NavList,
      Detail
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
  .list
    margin-bottom 1rem
    height 100%
    background #ffffff
    .main
      margin-top 0.88rem
</style>
