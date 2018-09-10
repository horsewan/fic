import {HEADER_SHOW,HEADER_HIDE,FOOTER_SHOW, FOOTER_HIDE, CHANGE_COLOR,HEADER_FONT_COLOR,IS_LOGIN,TOKEN} from './type'

const state = {
  headerShow: true,
  footerShow: true,
  isLogin: false,
  color: '#262a42',
  token: '',
  headerFontColor: '#f8f8f8',
}

const mutations = {
  [HEADER_SHOW](state){
    state.headerShow = true;
  },
  [HEADER_HIDE](state){
    state.headerShow = false;
  },
  [FOOTER_SHOW] (state) {
    state.footerShow = true
  },
  [FOOTER_HIDE] (state) {
    state.footerShow = false
  },
  [IS_LOGIN] (state, val) {
    state.isLogin = val
  },
  [TOKEN] (state, val) {
    state.token = val
  },
  [CHANGE_COLOR] (state, val) {
    state.color = val
  },
  [HEADER_FONT_COLOR] (state, val){
    state.headerFontColor = val
  }
}

const getters = {
  footerShow (state) {
    return state.footerShow
  },
  headerShow(state){
    return state.headerShow;
  },
  isLogin(state) {
    return state.isLogin;
  },
  token(state) {
    return state.token;
  },
  color (state) {
    return state.color;
  },
  headerFontColor(state){
    return state.headerFontColor;
  }
}

export default {
  state,
  mutations,
  getters
}
