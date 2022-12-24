<template>
  <form class="login-form" @submit.prevent="handleLogin" v-if="!loading">
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" name="email" id="email" v-model="userData.email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="userData.password" />
    </div>
    <div class="form-control">
      <label for="confirmPassword">Confirm Password</label>
      <input type="password" name="confirmPassword" id="confirmPassword" v-model="userData.confirmPassword" />
    </div>
    <button class="btn" type="submit">
      Signup
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
        password: "",
        confirmPassword: '',
      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Auth", ["signup"]),
    ...mapActions(["setLogin"]),
    async handleLogin() {
      await this.signup(this.userData);
      this.userData.email = "";
      this.userData.password = "";
      this.userData.confirmPassword = "";
      this.$router.push("/");
      this.setLogin(true);
    }
  },
  computed: {
    ...mapGetters("Auth", ["loading"])
  }
};
</script>
