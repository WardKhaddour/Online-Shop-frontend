import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static postProduct(qp = {}) {
    return unauthenticatedAxiosInstance.post(ep.POST_PRODUCT, qp).then(res => {
      return res.data;
    });
  }
}
