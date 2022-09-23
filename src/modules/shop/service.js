import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static fetchProducts(qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.PRODUCTS, qp)
      .then(res => res.data);
  }

  static getProductById(id, qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.GET_PRODUCT(id), qp)
      .then(res => res.data);
  }

  static addToCart(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.ADD_TO_CART, qp)
      .then(res => res.data);
  }
  static getCart(qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.GET_CART, qp)
      .then(res => res.data);
  }
  static deleteFromCart(qp = {}) {
    return unauthenticatedAxiosInstance
      .post(ep.DELETE_FROM_CART, qp)
      .then(res => res.data);
  }
}
