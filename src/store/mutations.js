import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DATA

} from './mutation-type'

export default {
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },

  [RECEIVE_HOME] (state, {home}) {
    state.home = home
  },
  // [RECEIVE_DATA] (state, {topicData}) {
  //   state.data = data
  // },

}
