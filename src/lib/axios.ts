import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ResData {
  code: number;
  data?: any;
  message: string;
}

const Axios =  axios.create({
  baseURL: "/api",
  timeout: 50000
});

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);