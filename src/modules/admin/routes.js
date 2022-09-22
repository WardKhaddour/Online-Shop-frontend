import ModuleLayout from "./module-layout.vue";

export default {
  path: "/admin",
  component: ModuleLayout,
  redirect: "add-product",
  children: [
    {
      name: "Add Product",
      path: "add-product",
      component: () => import("./pages/add-product"),
      meta: { title: "Add Product" }
    },
    {
      name: "Admin Products",
      path: "products",
      component: () => import("./pages/products"),
      meta: { title: "Admin Products" }
    }
  ]
};
