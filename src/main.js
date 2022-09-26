// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";
import "@/assets/css/forms.css";
import "@/assets/css/products.css";
import "@/assets/css/cart.css";
import "@/assets/css/orders.css";
import "@/assets/css/auth.css";

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
