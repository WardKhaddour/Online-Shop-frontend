import ModuleLayout from "./module-layout.vue";

export default {
  path: "/",
  component: ModuleLayout,
  redirect: "shop",
  children: [
    {
      path: "shop",
      component: () => import("./pages/index.vue"),
      meta: { title: "Shop" }
    },
    {
      path: "products",
      component: () => import("./pages/product-list.vue"),
      meta: { title: "Products" }
    },
    {
      path: "cart",
      component: () => import("./pages/cart.vue"),
      meta: { title: "Cart" }
    },
    {
      path: "details/:id",
      component: () => import("./pages/product-details.vue"),
      meta: { title: "Details" }
    }
  ]
};
