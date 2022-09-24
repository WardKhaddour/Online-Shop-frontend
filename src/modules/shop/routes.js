import ModuleLayout from "./module-layout.vue";

export default {
  path: "/",
  component: ModuleLayout,
  redirect: "shop",
  children: [
    {
      name: "Shop",
      path: "shop",
      component: () => import("./pages/index.vue"),
      meta: { title: "Shop" }
    },
    {
      name: "Products",
      path: "products",
      component: () => import("./pages/product-list.vue"),
      meta: { title: "Products" }
    },
    {
      name: "Cart",
      path: "cart",
      component: () => import("./pages/cart.vue"),
      meta: { title: "Cart" }
    },
    {
      name: "Orders",
      path: "orders",
      component: () => import("./pages/orders.vue"),
      meta: { title: "Orders" }
    },
    {
      name: "Details",
      path: "details/:id",
      component: () => import("./pages/product-details.vue"),
      meta: { title: "Details" }
    }
  ]
};
