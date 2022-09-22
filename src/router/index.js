import Vue from "vue";
import Router from "vue-router";
import Error404Layout from "@/layouts/404";
import MainLayout from "@/layouts/MainLayout";
import ShopModuleRoutes from "@/modules/shop/routes";
import AdminModuleRoutes from "@/modules/admin/routes";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [ShopModuleRoutes]
    },
    {
      path: "/admin",
      component: MainLayout,
      children: [AdminModuleRoutes]
    },
    {
      path: "*",
      component: Error404Layout
    }
  ]
});

// router.afterEach((to, from) => {
// Vue.nextTick(() => {
// console.log($router);
// document.title = router.name;
// });
// });

export default router;
