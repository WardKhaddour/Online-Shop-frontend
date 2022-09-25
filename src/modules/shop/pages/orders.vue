<template>
  <div v-if="!loading">
    <main v-if="orders.length">
      <ul class="orders">
        <li class="orders__item" v-for="order in orders" :key="order._id">
          <h1>Order- # {{ order._id }}</h1>
          <ul class="orders__products">
            <li
              class="orders__products-item"
              v-for="product in order.products"
              :key="product._id"
            >
              {{ product.product.title }} ({{ product.quantity }})
            </li>
          </ul>
        </li>
      </ul>
    </main>
    <h1 v-if="!orders.length">
      Nothing there!
    </h1>
  </div>
  <loading-spinner v-else class="loading-spinner"></loading-spinner>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader";

export default {
  components: { loadingSpinner: RingLoader },
  computed: {
    ...mapGetters("Shop", ["orders", "loading", "success"])
  },
  methods: {
    ...mapActions("Shop", ["getOrders"])
  },
  async created() {
    await this.getOrders();
  }
};
</script>
