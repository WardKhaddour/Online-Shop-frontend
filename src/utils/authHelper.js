class AuthHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    let token = localStorage.getItem("token");

    return token;
  }
}

const authHelper = new AuthHelper();

export default authHelper;
