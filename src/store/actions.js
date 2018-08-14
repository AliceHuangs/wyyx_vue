import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DATA
} from './mutation-type'

import {
  reqBanner,
  reqHome,
  reqData
} from '../api'

export default {
  async getBanner({commit}, callback) {
    const result = await reqBanner();
    if (result.code === 0) {
      const banner = result.focusList;
      // console.log("aaaa");
      commit(RECEIVE_BANNER, {banner});
      callback && callback()
    }
  },

  // //获取home信息
  // async getHome({commit},cb){
  //   const result = await reqHome()
  //   commit(Home,{result})
  //   cb && cb()
  // },
  // //获取首页data信息
  // async getData({commit},cb){
  //   const result = await reqData()
  //   commit(Data,{data:result.data})
  //   cb && cb()
  // },

  async getHome ({commit}, callback) {
    const result = await reqHome()
    // console.log(result);
    if (result.code === 0) {
      const home = result.home
      commit(RECEIVE_HOME, {home})
      callback && callback()
    }
  },
  // async getTopicData ({commit}) {
  //   const result = await reqTopciData()
  //   if (result.code === 0) {
  //     const topicData = result.data
  //     commit(RECEIVE_TOPICDATA, {topicData})
  //   }
  // },

}
