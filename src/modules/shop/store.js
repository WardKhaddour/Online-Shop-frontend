import ShopService from "./service";

export default {
  namespaced: true,
  state: {
    products: [],
    product: {},
    loading: true
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    products(state) {
      return state.products;
    },
    product(state) {
      return state.product;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      try {
        const products = (await ShopService.fetchProducts()).data;
        commit("setProducts", products);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async getProductById({ commit }, id) {
      commit("setLoading", true);
      try {
        const product = (await ShopService.getProductById(id)).data;
        commit("setProduct", product);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async addToCart({ commit }, id) {
      commit("setLoading", true);
      try {
        await ShopService.addToCart({ productId: id });
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    }
  }
};
