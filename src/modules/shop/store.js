import ShopService from "./service";

export default {
  namespaced: true,
  state: {
    products: [],
    loading: false
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    products(state) {
      return state.products;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setProducts(state, value) {
      state.products = value;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      const products = (await ShopService.fetchProducts()).data;
      commit("setProducts", products);
      console.log(products);
      commit("setLoading", false);
    }
  }
};
