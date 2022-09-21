import ModuleLayout from "./module-layout.vue";

export default {
  path: "/admin",
  component: ModuleLayout,
  redirect: "add-product",
  children: [
    {
      path: "add-product",
      component: () => import("./pages/add-product"),
      meta: { title: "Add Product" }
    }
  ]
};
