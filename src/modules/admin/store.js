import AdminService from "./service";

export default {
  namespaced: true,
  state: {
    loading: false,
    success: false
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    success(state) {
      return state.success;
    }
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setSuccessStatus(state, value) {
      state.success = value;
    }
  },
  actions: {
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
    }
  }
};
