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
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    },
    async signup({ commit }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.signup(userData);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    },
    async resetPassword({ commit }, userData) {
      commit("setLoading", true);
      try {
        await AuthService.resetPassword(userData);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    },
    async changePassword({ commit }, userData) {
      commit("setLoading", true);
      try {
        await AuthService.changePassword(userData);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    },
    async checkPasswordToken({ commit }, token) {
      // commit("setLoading", true);
      try {
        const res = await AuthService.checkPasswordToken(token);
        return res;
        // commit("setLoading", false);
      } catch (err) {
        console.log(err);
        throw err;

        // commit("setLoading", false);
      }
    },
    async updatePassword({ commit }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.updatePassword(userData);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
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
        throw err;
      }
    }
  }
};
