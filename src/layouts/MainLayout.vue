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
          link: "/shop"
        },
        {
          label: "Products",
          link: "/products"
        },
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
      currentPage: "Shop"
    };
  },
  created() {
    this.setActiveItem();
  },
  watch: {
    $route: {
      handler() {
        this.setActiveItem();
      }
    }
  },
  methods: {
    setActiveItem() {
      this.currentPage = this.$route.name;
    }
  }
};
</script>
