import Vue from "vue";
import Router from "vue-router";
import MainLayout from "@/layouts/MainLayout";
import ShopModuleRoutes from "@/modules/shop/routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [ShopModuleRoutes]
    }
  ]
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "Shop";
  });
});

export default router;
