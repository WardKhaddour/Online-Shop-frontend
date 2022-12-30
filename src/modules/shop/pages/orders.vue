<template>
  <div v-if="!loading">
    <main v-if="orders.length">
      <ul class="orders">
        <li class="orders__item" v-for="order in orders" :key="order._id">
          <h1>
            Order- # {{ order._id }}-
            <button @click="invoice(order._id)">Invoice</button>
          </h1>
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
    ...mapActions("Shop", ["getOrders", "invoice"])
  },
  async created() {
    await this.getOrders();
  }
};
</script>

<style>
.orders {
  list-style: none;
  padding: 0;
  margin: 0;
}

.orders__item h1 {
  margin: 0;
  font-size: 1rem;
}

.orders__item {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin-bottom: 1rem;
}

.orders__products {
  list-style: none;
  margin: 0;
  padding: 0;
}

.orders__products-item {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #00695c;
  color: #00695c;
}
</style>
