<template>
  <form class="login-form" @submit.prevent="handleSubmit" v-if="!loading">
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" name="email" id="email" v-model="userData.email" />
    </div>

    <button class="btn" type="submit">
      Reset password
    </button>
  </form>
  <loading-spinner class="loading-spinner" v-else></loading-spinner>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader";

export default {
  data() {
    return {
      userData: {
        email: "",

      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Auth", ["resetPassword"]),
    ...mapActions(["setLogin"]),
    async handleSubmit() {
      await this.resetPassword(this.userData);
      this.userData.email = "";

      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters("Auth", ["loading"])
  }
};
</script>
