<template>
  <div>
    <main v-if="!loading">
      <form class="product-form" @submit.prevent="submitHandler">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="title" />
        </div>
        <div class="form-control">
          <label for="imageUrl">Image URL</label>
          <input type="text" name="imageUrl" id="imageUrl" v-model="imageUrl" />
        </div>
        <div class="form-control">
          <label for="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            step="0.01"
            v-model="price"
          />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            v-model="description"
          ></textarea>
        </div>

        <button class="btn" type="submit">{{ buttonLabel }}</button>
      </form>
    </main>
    <loading-spinner v-if="loading" class="loading-spinner"></loading-spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      title: "",
      imageUrl: "",
      price: "",
      description: "",
      buttonLabel: "Add Product"
    };
  },
  created() {
    if (this.product) {
      this.id = this.product._id;
      this.title = this.product.title;
      this.imageUrl = this.product.imageUrl;
      this.price = this.product.price;
      this.description = this.product.description;
      this.buttonLabel = "Update Product";
    } else {
      // this.$router.push("/");
    }
  },
  components: {
    loadingSpinner: RingLoader
  },
  computed: {
    ...mapGetters("Admin", ["loading", "success"])
  },
  methods: {
    ...mapActions("Admin", ["postProduct", "editProduct"]),
    async submitHandler() {
      if (this.product) {
        await this.editProduct({
          id: this.id,
          title: this.title,
          imageUrl: this.imageUrl,
          price: this.price,
          description: this.description
        });
      } else {
        await this.postProduct({
          title: this.title,
          imageUrl: this.imageUrl,
          price: this.price,
          description: this.description
        });
      }
      if (this.success) {
        this.title = "";
        this.imageUrl = "";
        this.price = "";
        this.description = "";
        this.$router.push("/shop");
      }
    }
  }
};
</script>
