import { unauthenticatedAxiosInstance, axiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static fetchProducts(page) {
    return unauthenticatedAxiosInstance
      .get(ep.PRODUCTS(page))
      .then(res => res.data);
  }

  static getProductById(id, qp = {}) {
    return unauthenticatedAxiosInstance
      .get(ep.GET_PRODUCT(id), qp)
      .then(res => res.data);
  }

  static addToCart(qp = {}) {
    return axiosInstance.post(ep.ADD_TO_CART, qp).then(res => res.data);
  }
  static getCart(qp = {}) {
    return axiosInstance.get(ep.GET_CART, qp).then(res => res.data);
  }
  static deleteFromCart(productId) {
    return axiosInstance
      .delete(ep.DELETE_FROM_CART(productId))
      .then(res => res.data);
  }
  static postOrder(qp = {}) {
    return axiosInstance.post(ep.SEND_ORDER, qp).then(res => res.data);
  }

  static getOrders(qp = {}) {
    return axiosInstance.get(ep.GET_ORDERS, qp).then(res => res.data);
  }

  static invoice(orderId) {
    return axiosInstance({
      method: "GET",
      url: ep.INVOICE(orderId),
      responseType: "arraybuffer"
    }).then(res => {
      const blob = new Blob([res.data], {
        type: "application/pdf"
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `invoice-${orderId}`;
      link.click();
    });
  }
}
