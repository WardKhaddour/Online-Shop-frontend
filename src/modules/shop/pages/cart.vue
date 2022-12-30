<template>
  <div v-if="!loading">
    <main v-if="cart.length">
      <ul class="cart__item-list">
        <li
          class="cart__item"
          v-for="product in cart"
          :key="product.productId._id"
        >
          <h1>{{ product.productId.title }}</h1>
          <h2>Quantity: {{ product.quantity }}</h2>
          <button
            class="btn danger"
            @click="removeFromCart(product.productId._id)"
          >
            Delete
          </button>
        </li>
      </ul>
      <hr />
      <div class="centered">
        <button class="btn" @click="order">Order Now!</button>
      </div>
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
    ...mapGetters("Shop", ["cart", "loading", "success"])
  },
  methods: {
    ...mapActions("Shop", ["getCart", "removeFromCart", "postOrder"]),
    async order() {
      await this.postOrder();
      if (this.success) {
        this.$router.push("/orders");
      }
    }
  },
  async created() {
    await this.getCart();
  }
};
</script>

<style>
.cart__item-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  width: 40rem;
  max-width: 90%;
}

.cart__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 1rem;
}

.cart__item h1,
.cart__item h2 {
  margin-right: 1rem;
  font-size: 1.2rem;
  margin: 0;
}
</style>
