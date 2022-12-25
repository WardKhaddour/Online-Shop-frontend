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
    },

    {
      name: "Signup",
      path: "signup",
      component: () => import("./pages/signup.vue"),
      meta: { title: "Signup" }
    },
    {
      name: "Reset Password",
      path: "reset",
      component: () => import("./pages/resetPassword.vue"),
      meta: { title: "Reset Password" }
    },
    {
      name: "Update Password",
      path: "reset/:token",
      component: () => import("./pages/updatePassword.vue"),
      meta: { title: "Update Password" }
    }
  ]
};
