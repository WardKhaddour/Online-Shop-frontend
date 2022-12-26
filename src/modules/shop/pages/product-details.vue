<template>
  <div>
    <main class="centered" v-if="!loading">
      <h1>{{ product.title }}</h1>
      <hr />
      <div class="image">
        <img :src="getImage(product.imageUrl)" :alt="product.title" />
      </div>
      <h2>{{ product.price }}</h2>
      <p>{{ product.description }}</p>
      <button class="btn" @click.prevent="addProductToCart" v-if="isLoggedIn">
        Add to Cart
      </button>
    </main>
    <loading-spinner v-if="loading" class="loading-spinner"></loading-spinner>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import getImage from "../../../utils/getImage";

export default {
  components: {
    loadingSpinner: RingLoader
  },
  computed: {
    ...mapGetters("Shop", ["product", "loading"]),

    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions("Shop", ["getProductById", "addToCart"]),
    getImage,
    async addProductToCart() {
      await this.addToCart(this.product._id);
    }
  },
  async created() {
    await this.getProductById(this.$route.params.id);
    document.title = this.product.title;
  }
};
</script>
