<template>
  <div>
    <article class="card product-item" v-if="!loading">
      <header class="card__header">
        <h1 class="product__title">{{ product.title }}</h1>
      </header>
      <div class="card__image">
        <img :src="product.imageUrl" :alt="product.title" />
      </div>
      <div class="card__content">
        <h2 class="product__price">{{ product.price }}</h2>
        <p class="product__description">{{ product.description }}</p>
      </div>
      <div class="card__actions">
        <button class="btn" @click="viewProductDetails">Details</button>
        <button class="btn" v-if="isLoggedIn" @click="addProductToCart">
          Add to Cart
        </button>
      </div>
    </article>
    <loading-spinner v-if="loading"></loading-spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  props: { product: { type: Object, required: true } },
  components: {
    loadingSpinner: RingLoader
  },
  computed: {
    ...mapGetters("Shop", ["loading"]),
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions("Shop", ["addToCart"]),
    async addProductToCart() {
      await this.addToCart(this.product._id);
      this.$router.push("/cart");
    },
    viewProductDetails() {
      this.$router.push({
        path: `/details/${this.product._id}`
      });
    }
  }
};
</script>
