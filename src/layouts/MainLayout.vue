<template>
  <div>
    <input
      type="checkbox"
      name="toggle-header"
      id="toggle-header"
      class="toggle-header"
    />
    <label class="toggle-header__button" for="toggle-header">&nbsp;</label>
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

<style scoped>
.toggle-header__button {
  display: none;
}
.toggle-header {
  display: none;
}
.main-header {
  background-color: var(--color-primary);
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 3px;
}
.main-header__nav {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
}
.main-header__item-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: fit-content;
}

.main-header__item {
  padding: 0.1rem;
  color: var(--color-secondary);
  margin: 0 1rem;
  transition: all 0.2s;
  cursor: pointer;
}

.main-header__item:hover {
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border-radius: 2px;
  padding: 0.1rem;
  transform: translateY(-0.1rem);
}
.main-header__item a,
.main-header__item button {
  font: inherit;
  background: transparent;
  border: none;
  text-decoration: none;
  color: inherit;
}

@media only screen and (max-width: 1000px) {
  .main-header {
    height: 2.5rem;
    width: fit-content;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transform: translateX(-80%);
    transition: all 0.1s;
  }
  .main-header__nav,
  .main-header__item-list {
    display: flex;
    flex-direction: column;
    width: fit-content;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
  }

  .main-header__item {
    width: fit-content;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 1.4rem;
  }
  .toggle-header__button {
    display: inline-block;
    width: 1.5rem;
    height: 2px;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 3;
    background: var(--color-secondary);
    cursor: pointer;
  }
  .toggle-header__button::after,
  .toggle-header__button::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    z-index: 3;
    background: var(--color-secondary);
  }
  .toggle-header__button::after {
    top: -0.4rem;
  }
  .toggle-header__button::before {
    top: 0.4rem;
  }

  .toggle-header:checked ~ .main-header {
    height: 100vh;
    transform: translateX(0);
  }
}
</style>
