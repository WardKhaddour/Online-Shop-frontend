<template>
  <div>
    <main v-if="!loading">
      <form class="product-form" @submit.prevent="submitHandler">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="title" />
        </div>
        <div class="form-control">
          <div class="product-image">
            <img :src="imagePath" alt="Product Image" />
          </div>
          <label for="image">Image</label>
          <input type="file" name="image" id="image" @change="onImageUpload" />
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
      image: null,
      imagePath: "",
      price: "",
      description: "",
      buttonLabel: "Add Product"
    };
  },
  created() {
    if (this.product) {
      this.id = this.product._id;
      this.title = this.product.title;
      this.image = this.product.image;
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
    onImageUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.image = files[0];
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = e => {
        vm.imagePath = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async submitHandler() {
      const formData = new FormData();
      formData.append("id", this.id);
      formData.append("title", this.title);
      formData.append("image", this.image);
      formData.append("price", this.price);
      formData.append("description", this.description);

      if (this.product) {
        await this.editProduct(formData);
      } else {
        await this.postProduct(formData);
      }
      if (this.success) {
        this.title = "";
        this.image = null;
        this.price = "";
        this.description = "";
        this.$router.push("/shop");
      }
    }
  }
};
</script>

<style>
.product-form {
  width: 20rem;
  max-width: 90%;
  margin: auto;
  display: block;
}
</style>
