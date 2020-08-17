const state = {
  clientHeight: document.documentElement.clientHeight,
  isAppHeader: false,
  isAppFooter: false,
  isAppAside: false
};
const mutations = {
  setAppPageShow(state, newState) {
    console.log(newState)
    state.isAppHeader = newState.isAppHeader;
    state.isAppFooter = newState.isAppFooter;
    state.isAppAside = newState.isAppAside;
  }
};
const actions = {};
const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
