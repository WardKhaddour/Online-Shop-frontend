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
      <section class="pagination">
        <button v-if="currentPage !== 1" @click="getPage(0)">&lt;</button>
        <button v-if="currentPage !== pages" @click="getPage(1)">&gt;</button>
        <span class="active">{{ currentPage }} </span>
        <span> - {{ pages }} </span>
      </section>
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
    ...mapActions("Shop", ["fetchProducts"]),
    async getPage(next) {
      if (next) await this.fetchProducts(this.currentPage + 1);
      else await this.fetchProducts(this.currentPage - 1);
    }
  },
  computed: {
    ...mapGetters("Shop", ["products", "pages", "currentPage", "loading"])
  }
};
</script>
