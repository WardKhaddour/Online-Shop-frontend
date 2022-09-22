<template>
  <div>
    <main v-if="!loading">
      <div class="grid" v-if="products">
        <product-card
          v-for="product in products"
          :key="product.name"
          :product="product"
        ></product-card>
      </div>

      <h1 v-if="!products || products.length === 0">No Products Found!</h1>
    </main>
    <loading-spinner v-if="loading" class="loading-spinner"></loading-spinner>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import productCard from "../components/product-card.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  async created() {
    await this.fetchProducts();
  },
  components: {
    productCard,
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Shop", ["fetchProducts"])
  },
  computed: {
    ...mapGetters("Shop", ["products", "loading"])
  }
};
</script>
