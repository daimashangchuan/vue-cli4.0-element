const state = {
  clientHeight: document.documentElement.clientHeight,
  isAppHeader: true,
  isAppFooter: true,
  isAppAside: true
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
