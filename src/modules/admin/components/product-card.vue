<template>
  <article class="card product-item">
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
      <router-link
        class="btn link"
        :to="{
          name: 'Edit Product',
          params: { product: product }
        }"
        >Edit</router-link
      >
      <button class="btn" @click="deleteProd">Delete</button>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: { product: { type: Object, required: true } },
  methods: {
    ...mapActions("Admin", ["deleteProduct"]),
    async deleteProd() {
      await this.deleteProduct(this.product._id);
    }
  }
};
</script>
