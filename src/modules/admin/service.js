import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static fetchProducts(qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.ADMIN_PRODUCTS, qp)
      .then(res => res.data);
  }
  static postProduct(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.POST_PRODUCT, qp, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data);
  }

  static editProduct(qp = {}) {
    return unauthenticatedAxiosInstance
      .patch(ep.EDIT_PRODUCT, qp)
      .then(res => res.data);
  }

  static deleteProduct(productId) {
    return unauthenticatedAxiosInstance.delete(ep.DELETE_PRODUCT(productId));
  }
}
