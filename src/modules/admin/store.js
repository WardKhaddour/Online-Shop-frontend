import AdminService from "./service";

export default {
  namespaced: true,
  state: {
    products: [],
    loading: false,
    success: false
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    products(state) {
      return state.products;
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
    setSuccessStatus(state, value) {
      state.success = value;
    }
  },
  actions: {
    async fetchAdminProducts({ commit }) {
      commit("setLoading", true);
      try {
        const products = (await AdminService.fetchProducts()).data;
        commit("setProducts", products);
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
      }
    },
    async postProduct({ commit }, product) {
      commit("setLoading", true);
      try {
        await AdminService.postProduct(product);
        commit("setLoading", false);
        commit("setSuccessStatus", true);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        commit("setSuccessStatus", false);
      }
    },

    async editProduct({ commit }, product) {
      commit("setLoading", true);
      try {
        await AdminService.editProduct(product);
        commit("setLoading", false);
        commit("setSuccessStatus", true);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        commit("setSuccessStatus", false);
      }
    },

    async deleteProduct({ commit, dispatch }, id) {
      commit("setLoading", true);
      try {
        await AdminService.deleteProduct({ id });
        commit("setLoading", false);
        commit("setSuccessStatus", true);
        dispatch("fetchAdminProducts");
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        commit("setSuccessStatus", false);
      }
    }
  }
};
