const state = {
  navMenuList: [],
  isDrawerVisible: false,
  isSilderDark: true
};
const mutations = {
  setSilderDark(state, data) {
    state.isSilderDark = data;
  },

  setDrawerVisible(state) {
    state.isDrawerVisible = !state.isDrawerVisible;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
