<template>
  <form class="login-form" @submit.prevent="handleSubmit" v-if="!loading">
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" name="email" id="email" v-model="userData.email" />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="userData.password"
      />
    </div>
    <div class="form-control">
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        v-model="userData.confirmPassword"
      />
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
import { isEmail } from "validator";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      validation: {
        validEmail: true,
        validPassword: true,
        validConfirmPassword: true
      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Auth", ["signup"]),
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
      if (this.userData.password !== this.userData.confirmPassword) {
        this.validation.validConfirmPassword = false;
        this.setErrorMessage("Passwords should match");
        return;
      }
      this.setErrorMessage("");
      this.validation.validEmail = true;
      this.validation.validPassword = true;
      try {
        await this.signup(this.userData);
        this.userData.email = "";
        this.userData.password = "";
        this.userData.confirmPassword = "";
        this.$router.push("/");
        this.setLogin(true);
      } catch (err) {
        this.setErrorMessage(err.response.data.message);
        console.log(err.response);
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
