import { unauthenticatedAxiosInstance, axiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static fetchProducts(qp = {}) {
    return axiosInstance.get(ep.ADMIN_PRODUCTS, qp).then(res => res.data);
  }
  static postProduct(qp = {}) {
    return axiosInstance
      .post(ep.POST_PRODUCT, qp, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data);
  }

  static editProduct(qp = {}) {
    return axiosInstance.patch(ep.EDIT_PRODUCT, qp).then(res => res.data);
  }

  static deleteProduct(productId) {
    return axiosInstance.delete(ep.DELETE_PRODUCT(productId));
  }
}
