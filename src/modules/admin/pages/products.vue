<template>
  <main>
    <div class="grid"  v-if="!loading && products" >
      <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
    </div>

    <h1 v-if="!products ||products.length===0">No Products Found!</h1>
  </main></template
>
</template>

<script >
import { mapGetters, mapActions } from "vuex";
import productCard from '../components/product-card.vue'

export default {
   async created() {
    await this.fetchProducts();
  },
  components:{
    productCard
  },
  methods:{
    ...mapActions('Shop',['fetchProducts'])
  },
  computed:{
     ...mapGetters('Shop',['products','loading'])
  }
};
</script>
