const state = {
  navMenuList: [],
  isDrawerVisible: false,
  isSilderDark: true,
  lang: "zh_CN"
};
const mutations = {
  setSilderDark(state, data) {
    state.isSilderDark = data;
  },
  setDrawerVisible(state) {
    state.isDrawerVisible = !state.isDrawerVisible;
  },
  setLang(state, data) {
    state.lang = data;
    window.localStorage.setItem("lang", data);
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
