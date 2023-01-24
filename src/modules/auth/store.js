import AuthService from "./service";
import authHelper from "@/utils/authHelper";
import { axiosInstance, unauthenticatedAxiosInstance } from "@/utils/axios";

const initUser = function() {
  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    user = {};
  } finally {
    return user;
  }
};
const getState = function() {
  return {
    loading: false,
    token: authHelper.getToken(),
    user: initUser() || {}
  };
};

export default {
  namespaced: true,
  state: getState,
  getters: {
    loading(state) {
      return state.loading;
    },
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setToken(state, token) {
      state.token = token;
      authHelper.setToken(token);
      axiosInstance.defaults.headers["Authorization"] =
        "Bearer " + authHelper.getToken();
    },
    setUser(state, value) {
      state.user = value;
    },
    resetState(state) {
      Object.assign(state, getState());
    }
  },
  actions: {
    getToken() {
      const token = authHelper.getToken();
      return token;
    },
    storeUser({ commit }, user) {
      commit("setUser", user);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    },
    async login({ commit, dispatch }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.login(userData);
        console.log(res);
        commit("setToken", res.data.token);
        dispatch("storeUser", res.data.user);

        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    },
    async signup({ commit, dispatch }, userData) {
      commit("setLoading", true);
      try {
        const res = await AuthService.signup(userData);
        const { user, token } = { ...res.data };
        commit("setToken", token);
        dispatch("storeUser", { ...user, cart: {}, password: undefined });
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
    async logout({ commit, dispatch }) {
      commit("setLoading", true);
      try {
        await AuthService.logout();

        commit("setToken", "");
        dispatch("storeUser", "");
        commit("setLoading", false);
        commit("resetState");
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        throw err;
      }
    }
  }
};
