import AuthService from "./service";

export default {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
    loading(state) {
      return state.loading;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    }
  },
  actions: {
    async login({ commit }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.login(userData);
        console.log(res);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async signup({ commit }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.signup(userData);
        console.log(res);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async logout({ commit }) {
      commit("setLoading", true);
      try {
        await AuthService.logout();
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    }
  }
};
