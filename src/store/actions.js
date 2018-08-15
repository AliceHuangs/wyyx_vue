import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_NAV,
  RECEIVE_GENERAL,
} from './mutation-type'

import {
  reqBanner,
  reqHome,
  reqNav,
  reqGeneral,
  LoginWay
} from '../api'

export default {
  //获取首页头部轮播图的数据
  async getBanner({commit}, callback) {
    const result = await reqBanner();
    if (result.code === 0) {
      const banner = result.focusList;
      commit(RECEIVE_BANNER, {banner});
      callback && callback()
    }
  },

  //获取首页home页面的数据
  async getHome ({commit}, callback) {
    const result = await reqHome()
    if (result.code === 0) {
      const home = result.home
      commit(RECEIVE_HOME, {home})
      callback && callback()
    }
  },

  //获取识物页面
  async getGeneral ({commit}, callback) {
    const result = await reqGeneral();
    if (result.code === 0) {
      const general = result.general
      commit(RECEIVE_GENERAL, {general})
      callback && callback()
    }
  },

  //获取分类页面nav数据
  async getNav ({commit}, callback) {
    const result = await reqNav()
    if (result.code === 0) {
      const nav = result.nav
      commit(RECEIVE_NAV, {nav})
      callback && callback()
    }
  },
  //设置loginWay
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }

}
