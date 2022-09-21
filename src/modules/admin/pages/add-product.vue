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

        <button class="btn" type="submit">Add Product</button>
      </form>
    </main>
    <loading-spinner v-if="loading" class="loading-spinner"></loading-spinner>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      price: "",
      description: ""
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  computed: {
    ...mapGetters("Admin", ["loading", "success"])
  },
  methods: {
    ...mapActions("Admin", ["postProduct"]),
    async submitHandler() {
      await this.postProduct({
        title: this.title,
        imageUrl: this.imageUrl,
        price: this.price,
        description: this.description
      });
      if (this.success) {
        this.title = "";
        this.imageUrl = "";
        this.price = "";
        this.description = "";
      }
    }
  }
};
</script>
