import Vue from "vue";
import Vuex from "vuex";
import Shop from "@/modules/shop/store.js";
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: { Shop },
  state: {
    curPage: "Shop"
  },
  getters: {
    currentPage(state) {
      return state.curPage;
    }
  }
});
