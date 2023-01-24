<template>
  <article class="card product-item">
    <header class="card__header">
      <h1 class="product__title">{{ product.title }}</h1>
    </header>
    <div class="card__image">
      <img :src="getImage(product.image)" :alt="product.title" />
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
import getImage from "../../../utils/getImage";

export default {
  props: { product: { type: Object, required: true } },
  methods: {
    ...mapActions("Admin", ["deleteProduct"]),
    getImage,
    async deleteProd() {
      await this.deleteProduct(this.product._id);
    }
  }
};
</script>

<style>


.product-item {
  width: 20rem;
  max-width: 95%;
  margin: 1rem;
}

.product__title {
  font-size: 1.2rem;
  text-align: center;
}

.product__price {
  text-align: center;
  color: #4d4d4d;
  margin-bottom: 0.5rem;
}

.product__description {
  text-align: center;
}

.active {
  background-color: #00695c;
  padding: 2px;
  color: white;
  margin: 2px;
}
</style>
