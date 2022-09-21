import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static fetchProducts(qp = {}) {
    return unauthenticatedAxiosInstance.get(ep.PRODUCTS, qp).then(res => {
      return res.data;
    });
  }
}
