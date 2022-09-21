import Vue from "vue";
import Vuex from "vuex";
import Admin from "@/modules/admin/store.js";
import Shop from "@/modules/shop/store.js";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: { Shop, Admin },
  state: {
    curPage: "Shop"
  },
  getters: {
    currentPage(state) {
      return state.curPage;
    }
  }
});
