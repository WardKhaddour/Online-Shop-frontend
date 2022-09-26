import ModuleLayout from "./module-layout.vue";

export default {
  path: "/",
  component: ModuleLayout,
  redirect: "login",
  children: [
    {
      name: "Login",
      path: "login",
      component: () => import("./pages/login.vue"),
      meta: { title: "Login" }
    }
  ]
};
