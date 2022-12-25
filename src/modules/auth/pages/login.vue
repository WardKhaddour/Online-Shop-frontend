<template>
  <div v-if="!loading">
    <form class="login-form" @submit.prevent="handleSubmit" novalidate>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input
          :class="{
            invalid: !validation.validEmail
          }"
          type="email"
          name="email"
          id="email"
          v-model="userData.email"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          :class="{ invalid: !validation.validPassword }"
          type="password"
          name="password"
          id="password"
          v-model="userData.password"
        />
      </div>
      <button class="btn" type="submit">
        Login
      </button>
    </form>
    <router-link to="/reset" class="centered">Reset Password</router-link>
  </div>
  <loading-spinner class="loading-spinner" v-else></loading-spinner>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader";
import { isEmail } from "validator";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: ""
      },
      validation: {
        validEmail: true,
        validPassword: true
      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Auth", ["login"]),
    ...mapActions(["setLogin", "setErrorMessage"]),
    async handleSubmit() {
      if (!isEmail(this.userData.email)) {
        this.validation.validEmail = false;
        this.setErrorMessage("Please Provide a valid Email!!");
        return;
      }
      if (this.userData.password.length < 5) {
        this.validation.validPassword = false;
        this.setErrorMessage("Please Provide a valid Password!!");
        return;
      }
      this.setErrorMessage("");
      this.validation.validEmail = true;
      this.validation.validPassword = true;

      try {
        await this.login(this.userData);
        this.userData.email = "";
        this.userData.password = "";
        this.$router.push("/");
        this.setLogin(true);
      } catch (err) {
        this.setErrorMessage(err.response.data.message);
      }
    }
  },
  beforeDestroy() {
    this.setErrorMessage("");
  },
  computed: {
    ...mapGetters("Auth", ["loading"])
  }
};
</script>
