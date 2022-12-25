<template>
  <form
    class="login-form"
    @submit.prevent="handleSubmit"
    v-if="!loading"
    novalidate
  >
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
import { isEmail } from "validator";

export default {
  data() {
    return {
      userData: {
        email: ""
      },
      validation: {
        validEmail: true
      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  methods: {
    ...mapActions("Auth", ["resetPassword"]),
    ...mapActions(["setLogin", "setErrorMessage"]),
    async handleSubmit() {
      if (!isEmail(this.userData.email)) {
        this.validation.validEmail = false;
        this.setErrorMessage("Please Provide a valid Email!!");
        return;
      }
      try {
        this.setErrorMessage("Please provide a valid email");
        await this.resetPassword(this.userData);

        this.userData.email = "";

        this.$router.push("/");
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
