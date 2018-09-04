import * as types from './type'

export default {
  showHeader:({commit})=>{
    commit(types.HEADER_SHOW)
  },
  hideHeader:({commit})=>{
    commit(types.HEADER_HIDE)
  },
  showFooter: ({commit}) => {
    commit(types.FOOTER_SHOW)
  },
  hideFooter: ({commit}) => {
    commit(types.FOOTER_HIDE)
  },
  changeColor: ({commit}, val) => {
    commit(types.CHANGE_COLOR, val)
  },
  changeHeaderFontColor: ({commit}, val) => {
    commit(types.HEADER_FONT_COLOR, val)
  },
}
