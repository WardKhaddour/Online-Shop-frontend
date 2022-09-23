<template>
  <div v-if="!loading">
    <main v-if="cart.length">
      <ul>
        <li v-for="product in cart" :key="product.productData.id">
          <p>{{ product.productData.title }} ({{ product.qty }})</p>
          <button class="btn" @click="deleteFromCart(product.id)">
            Delete
          </button>
        </li>
      </ul>
    </main>
    <h1 v-if="!cart.length">
      No Products in Cart!
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
    ...mapGetters("Shop", ["cart", "loading"])
  },
  methods: {
    ...mapActions("Shop", ["getCart", "deleteFromCart"])
  },
  async created() {
    await this.getCart();
  }
};
</script>
