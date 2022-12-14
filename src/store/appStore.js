import { isEmpty } from 'lodash'

const state = {
  miniVariant: false,
  chatDrawer: false,
  sideBar: true,
  appSnackbar: {},
}
const getters = {
  sMiniVariant: state => state.miniVariant,
  sSideBar: state => state.sideBar,
  sChatDrawer: state => state.chatDrawer,
  activeSnackbar: state => isEmpty(state.appSnackbar) ? state.appSnackbar : null,
}

const mutations = {
  SET_SIDEBAR(state, val) {
    state.sideBar = val
  },
  SET_CHAT_DRAWER(state, val) {
    state.chatDrawer = val
  },
  SET_MINI_VARIANT(state, val) {
    state.miniVariant = val
  },
  SET_SNACKBAR(state, payload = null) {
    state.appSnackbar = payload
  },
}

const actions = {
  setSideBar({commit}, val) {
    commit('SET_SIDEBAR', val)
  },
  setChatDrawer({commit}, val) {
    commit('SET_CHAT_DRAWER', val)
  },
  setMiniVariant({commit}, val) {
    commit('SET_MINI_VARIANT', val)
  },
  setSnackbar({commit}, payload = null) {
    commit('SET_SNACKBAR', payload ? payload : {})
  },

}

export default {
  state,
  actions,
  mutations,
  getters,
}
