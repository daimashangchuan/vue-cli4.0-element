const state = {
  clientHeight: document.documentElement.clientHeight,
  isAppHeader: true,
  isAppFooter: true,
  isAppAside: true,
  isAppTabs: true
};
const mutations = {
  setAppPageShow(state, newState) {
    console.log(newState)
    state.isAppHeader = newState.isAppHeader;
    state.isAppFooter = newState.isAppFooter;
    state.isAppAside = newState.isAppAside;
    state.isAppTabs = newState.isAppTabs;
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
