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
    }
  ]
};
