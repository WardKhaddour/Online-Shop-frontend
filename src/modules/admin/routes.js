import ModuleLayout from "./module-layout.vue";

export default {
  path: "/admin",
  component: ModuleLayout,
  redirect: "add-product",
  children: [
    {
      name: "Add Product",
      path: "add-product",
      component: () => import("./pages/edit-product"),
      meta: { title: "Add Product" }
    },
    {
      name: "Edit Product",
      path: "edit-product",
      component: () => import("./pages/edit-product"),
      props: true,
      meta: { title: "Edit Product" }
    },
    {
      name: "Admin Products",
      path: "products",
      component: () => import("./pages/products"),
      meta: { title: "Admin Products" }
    }
  ]
};
