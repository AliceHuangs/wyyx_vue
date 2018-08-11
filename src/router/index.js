import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../pages/Home/Home.vue'
import General from '../pages/General/General.vue'
import List from '../pages/List/List.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Person from '../pages/Person/Person.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/general',
      component: General
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
