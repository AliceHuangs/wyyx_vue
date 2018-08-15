<template>
  <section class="list">
    <Search></Search>
    <section class="main">
      <div class="listMenu">
        <div class="inner" >
          <ul>
            <li class="item" v-for="(item1,index1) in nav.categoryL1List" :key="index1" @click="getIndex(index1)" :class="{active:index === index1 }">
              <a href="javascript:;">{{item1.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <Detail :nav="nav" :index="index"/>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'

  import Search from './Search/Search.vue'
  import Detail from './Detail/Detail.vue'

  export default {
    name: "List",
    data(){
      return {
        index: 3
      }
    },
    computed:{
      ...mapState(['nav'])
    },
    mounted () {
      this.$store.dispatch('getNav')
    },
    methods:{
      getIndex(index1){
        this.index = index1
      }
    },
    components:{
      Search,
      Detail
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
      .listMenu
        position fixed
        top 0.88rem
        left 0
        bottom 0
        z-index 4
        width 1.62rem
        background-color #ffffff
        &:after
          content ''
          position absolute
          background-color rgba(0,0,0,.15)
          top 0
          bottom 0
          width 1px
          -webkit-transform-origin 100% 50% 0
          transform-origin 100% 50% 0
          right 0
        .inner
          width 100%
          max-height 11.04rem
          padding-top 0.4rem
          overflow hidden
          >ul
            padding-bottom 1.38rem
            >.item
              width 100%
              height 0.76rem
              line-height 0.76rem
              text-align center
              border none
              &.active
                position relative
                &:before
                  content ''
                  position absolute
                  top 0
                  left 0
                  bottom 0
                  width 0.06rem
                  background-color #b4282d
                >a
                  font-size 0.36rem
                  line-height 0.76rem
                  font-weight 700
                  color #b4282d
              +.item
                margin-top 0.2rem
              >a
                display block
                color #333333
                font-size 0.28rem
                line-height 0.56rem
                ellipsis()
</style>
