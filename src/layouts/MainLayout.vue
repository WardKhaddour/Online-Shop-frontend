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
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      navItems: [
        {
          label: "Shop",
          link: "/shop",
          active: ""
        },
        {
          label: "Products",
          link: "/products",
          active: ""
        },
        {
          label: "Cart",
          link: "/cart",
          active: ""
        },
        {
          label: "Orders",
          link: "/orders",
          active: ""
        },
        {
          label: "Add Product",
          link: "/admin/add-product",
          active: ""
        },
        {
          label: "Admin Product",
          link: "/admin/products",
          active: ""
        }
      ],
      currentPage: "Shop"
    };
  },
  watch: {
    $route: {
      handler() {
        this.currentPage = document.title;
      }
    }
  },
  methods: {}
};
</script>
