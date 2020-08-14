const state = {
  show: false, 
};
const mutations = {
  SHWO_CLICK(state, newState) {
    state.show = newState;
  }
};
const actions = {
  showClick({ commit }, newState) {
    commit("SHWO_CLICK", newState);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
