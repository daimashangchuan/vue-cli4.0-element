const state = {
  userInfo: null,
  userToken: null
};
const mutations = {
  GET_USERINFO(state, newState) {
    state.userInfo = newState;
  },
  GET_USERTOKEN(state, newState) {
    state.userToken = newState;
  }
};
const actions = {
  setUserInfo({ commit }, newState) {
    commit("GET_USERINFO", newState);
  },
  setUserToken({ commit }, newState) {
    commit("GET_USERTOKEN", newState);
  }
};
const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
