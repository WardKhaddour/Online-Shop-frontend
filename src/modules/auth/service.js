import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static login(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.LOGIN, qp)
      .then(res => res.data);
  }
  static signup(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.SIGNUP, qp)
      .then(res => res.data);
  }
  static resetPassword(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.RESET_PASSWORD, qp)
      .then(res => res.data);
  }
  static changePassword(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.CHANGE_PASSWORD, qp)
      .then(res => res.data);
  }
  static checkPasswordToken(qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.CHECK_PASSWORD_TOKEN(qp))
      .then(res => res);
  }
  static updatePassword(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.UPDATE_PASSWORD, qp)
      .then(res => res);
  }
  static logout(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.LOGOUT, qp)
      .then(res => res.data);
  }
}
