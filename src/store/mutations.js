import {HEADER_SHOW,HEADER_HIDE,FOOTER_SHOW, FOOTER_HIDE, CHANGE_COLOR,HEADER_FONT_COLOR} from './type'

const state = {
  headerShow: true,
  footerShow: true,
  color: '#262a42',
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
  color (state) {
    return state.color
  },
  changeHeaderFontColor(){
    return state.headerFontColor
  }
}

export default {
  state,
  mutations,
  getters
}
