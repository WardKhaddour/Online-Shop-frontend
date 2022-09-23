import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static postProduct(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.POST_PRODUCT, qp)
      .then(res => res.data);
  }

  static editProduct(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.EDIT_PRODUCT, qp)
      .then(res => res.data);
  }

  static deleteProduct(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.DELETE_PRODUCT, qp)
      .then(res => res.data);
  }
}
