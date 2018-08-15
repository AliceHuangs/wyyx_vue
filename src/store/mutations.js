import {
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_NAV,
  RECEIVE_GENERAL,
  LoginWay
} from './mutation-type'

export default {
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },

  [RECEIVE_HOME] (state, {home}) {
    state.home = home
  },
  [RECEIVE_NAV](state,{nav}) {
    state.nav = nav
  },
  [RECEIVE_GENERAL] (state, {general}) {
    state.general = general
  },
  [LoginWay](state,loginWay) {
    state.loginWay = loginWay
  },

}
