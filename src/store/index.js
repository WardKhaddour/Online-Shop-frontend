import Vue from "vue";
import Vuex from "vuex";
import Admin from "@/modules/admin/store.js";
import Shop from "@/modules/shop/store.js";
import Auth from "@/modules/auth/store.js";

Vue.use(Vuex);

function initLoginState() {
  return localStorage.getItem("token") && localStorage.getItem("user");
}

export default new Vuex.Store({
  namespaced: true,
  modules: { Shop, Admin, Auth },
  state: {
    isLoggedIn: initLoginState(),
    errorMessage: ""
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    errorMessage(state) {
      return state.errorMessage;
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    setError(state, value) {
      state.errorMessage = value;
    }
  },
  actions: {
    setLogin({ commit }, value) {
      commit("setLoggedIn", value);
    },

    setErrorMessage({ commit }, value) {
      commit("setError", value);
    }
  }
});
