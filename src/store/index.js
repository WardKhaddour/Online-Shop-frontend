import Vue from "vue";
import Vuex from "vuex";
import Admin from "@/modules/admin/store.js";
import Shop from "@/modules/shop/store.js";
import Auth from "@/modules/auth/store.js";

Vue.use(Vuex);

function initLoginState() {
  console.log("ss", document.cookie.split("=")[1]);
  return document.cookie.split("=")[1];
}
initLoginState();
export default new Vuex.Store({
  namespaced: true,
  modules: { Shop, Admin, Auth },
  state: {
    isLoggedIn: initLoginState() === "true"
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    }
  },
  actions: {
    setLogin({ commit }, value) {
      commit("setLoggedIn", value);
    }
  }
});
