<template>
  <div>
    <main class="centered" v-if="!loading">
      <h1>{{ product.title }}</h1>
      <hr />
      <div class="image">
        <img :src="product.imageUrl" :alt="product.title" />
      </div>
      <h2>{{ product.price }}</h2>
      <p>{{ product.description }}</p>
      <button class="btn" @click.prevent="addProductToCart">Add to Cart</button>
    </main>
    <loading-spinner v-if="loading" class="loading-spinner"></loading-spinner>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  components: {
    loadingSpinner: RingLoader
  },
  computed: {
    ...mapGetters("Shop", ["product", "loading"])
  },
  methods: {
    ...mapActions("Shop", ["getProductById", "addToCart"]),
    async addProductToCart() {
      await this.addToCart(this.product.id);
    }
  },
  async created() {
    await this.getProductById(this.$route.params.id);
    document.title = this.product.title;
  }
};
</script>
