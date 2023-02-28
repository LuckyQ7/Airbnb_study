import axios from "axios";
import { baseURL, timeout } from './config'

class ServiceRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return err
        })
    }
    get(config) {
        return this.instance.request({ ...config, method: "GET" })
    }
    post(config) {
        return this.instance.request({ ...config, method: "POST" })
    }

}

const request = new ServiceRequest(baseURL, timeout)

export default request