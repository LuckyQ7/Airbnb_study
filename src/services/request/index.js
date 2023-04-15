import axios from "axios";
import { baseURL, timeout } from "./config";

class ServiceRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  get(config) {
    return this.instance.request({
      ...config,
      method: "GET",
      headers: { apifoxToken: "B1oe2iTE7znIIXh6HFY5uv96GUHTFnBh" },
    });
  }
  post(config) {
    return this.instance.request({
      ...config,
      method: "POST",
      headers: { apifoxToken: "B1oe2iTE7znIIXh6HFY5uv96GUHTFnBh" },
    });
  }
}

const request = new ServiceRequest(baseURL, timeout);

export default request;
