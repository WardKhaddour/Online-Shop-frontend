import ShopService from "./service";

export default {
  namespaced: true,
  state: {
    products: [],
    product: {},
    cart: [],
    orders: [],
    loading: true,
    success: false
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
    },
    cart(state) {
      return state.cart;
    },
    orders(state) {
      return state.orders;
    },
    success(state) {
      return state.success;
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
    },
    setCart(state, value) {
      state.cart = value;
    },
    setOrders(state, value) {
      state.orders = value;
    },
    setSuccess(state, value) {
      state.success = value;
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
    },
    async getCart({ commit }) {
      commit("setLoading", true);
      try {
        const cart = (await ShopService.getCart()).data;
        commit("setCart", cart);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async removeFromCart({ commit, dispatch }, id) {
      commit("setLoading", true);
      try {
        await ShopService.deleteFromCart({ id });
        dispatch("getCart");
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async postOrder({ commit }) {
      commit("setLoading", true);
      try {
        await ShopService.postOrder();
        commit("setLoading", false);
        commit("setSuccess", true);
      } catch (err) {
        console.log(err);
        commit("setSuccess", false);
        commit("setLoading", false);
      }
    },
    async getOrders({ commit }) {
      commit("setLoading", true);
      try {
        const orders = (await ShopService.getOrders()).data;
        commit("setOrders", orders);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    }
  }
};
