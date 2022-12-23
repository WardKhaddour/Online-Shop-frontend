import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static login(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.LOGIN, qp)
      .then(res => res.data);
  }
  static logout(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.LOGOUT, qp)
      .then(res => res.data);
  }
}
