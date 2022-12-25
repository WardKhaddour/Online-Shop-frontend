<template>
  <div>
    <div>
      <form class="login-form" @submit.prevent="handleSubmit">
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="userData.newPassword"
          />
        </div>
        <button class="btn" type="submit">
          Update Password
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RingLoader from "vue-spinner/src/RingLoader";
export default {
  data() {
    return {
      userData: {
        newPassword: "",
        passwordToken: "",
        userId: ""
      },
      validate: {
        validPassword: true
      }
    };
  },
  components: {
    loadingSpinner: RingLoader
  },
  async created() {
    try {
      const { token } = this.$route.params;
      const res = await this.checkPasswordToken(token);
      if (res.status != 200) {
        this.$destroy();
        this.$router.push("/reset");
      } else {
        this.userData.passwordToken = res.data.passwordToken;
        this.userData.userId = res.data.userId;
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  methods: {
    ...mapActions("Auth", ["checkPasswordToken", "updatePassword"]),
    ...mapActions(["setErrorMessage"]),

    async handleSubmit() {
      if (this.userData.newPassword.length < 5) {
        this.setErrorMessage("Password should be at least 5 characters");
        return;
      }
      this.setErrorMessage("");
      await this.updatePassword(this.userData);
      this.$router.push("/login");
      // await this.login(this.userData);
      // this.userData.password = "";
      // this.$router.push("/");
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
