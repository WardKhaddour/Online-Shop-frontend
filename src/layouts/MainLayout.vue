<template>
  <div>
    <header class="main-header">
      <nav class="main-header__nav">
        <ul class="main-header__item-list">
          <li
            class="main-header__item"
            v-for="item in navItems"
            :key="item.label"
          >
            <router-link
              :class="{
                active: currentPage === item.label
              }"
              :to="item.link"
              >{{ item.label }}</router-link
            >
          </li>

          <li
            class="main-header__item"
            v-for="item in loggedInUserItems"
            :key="item.label"
          >
            <router-link
              v-if="isLoggedIn"
              :class="{
                active: currentPage === item.label
              }"
              :to="item.link"
              >{{ item.label }}</router-link
            >
          </li>
        </ul>
        <ul class="main-header__item-list">
          <li class="main-header__item" v-if="!isLoggedIn">
            <router-link
              :class="{
                active: currentPage === 'Logout'
              }"
              to="/login"
              >Login</router-link
            >
          </li>
          <li class="main-header__item" v-if="!isLoggedIn">
            <router-link
              :class="{
                active: currentPage === 'Logout'
              }"
              to="/signup"
              >Signup</router-link
            >
          </li>
          <li class="main-header__item" v-if="isLoggedIn">
            <router-link @click.native="handleLogout" to="/"
              >Logout</router-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <div class="error-message" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainLayout",

  data() {
    return {
      navItems: [
        {
          label: "Shop",
          link: "/shop"
        },
        {
          label: "Products",
          link: "/products"
        }
      ],
      loggedInUserItems: [
        {
          label: "Cart",
          link: "/cart"
        },
        {
          label: "Orders",
          link: "/orders"
        },
        {
          label: "Add Product",
          link: "/admin/add-product"
        },
        {
          label: "Admin Products",
          link: "/admin/products"
        }
      ],
      authItems: [
        {
          label: "Logout",
          action: this.logout,
          link: "/"
        }
      ],
      currentPage: "Shop"
    };
  },
  created() {
    this.setActiveItem();
  },
  computed: {
    ...mapGetters(["isLoggedIn", "errorMessage"])
  },
  watch: {
    $route: {
      handler() {
        this.setActiveItem();
      }
    }
  },
  methods: {
    ...mapActions("Auth", ["logout"]),
    ...mapActions(["setLogin"]),
    async handleLogout() {
      await this.logout();
      this.setLogin(false);
    },
    setActiveItem() {
      this.currentPage = this.$route.name;
    }
  }
};
</script>
