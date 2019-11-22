const state = {
  navMode: "inline",
  navMenuList: [],
  isDrawerVisible: false
};
const mutations = {
  setNavMode(state) {
    if (state.navMode === "inline") {
      state.navMode = "horizontal";
    } else {
      state.navMode = "inline";
    }
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
