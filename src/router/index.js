import Vue from "vue";
import Router from "vue-router";
import Error404Layout from "@/layouts/404";
import Error500Layout from "@/layouts/500";
import MainLayout from "@/layouts/MainLayout";
import ShopModuleRoutes from "@/modules/shop/routes";
import AdminModuleRoutes from "@/modules/admin/routes";
import AuthModuleRoutes from "@/modules/auth/routes";

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
      path: "/",
      component: MainLayout,
      children: [AuthModuleRoutes]
    },
    {
      path: "/admin",
      component: MainLayout,
      children: [AdminModuleRoutes]
    },
    {
      path: "/500",
      component: Error500Layout
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
