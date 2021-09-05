import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ResData {
  code: number;
  data?: any;
  message: string;
}

const BASE_URL = "https://ably-frontend-assignment-server.vercel.app/"

const Axios =  axios.create({
  baseURL: "https://ably-frontend-assignment-server.vercel.app/",
  timeout: 50000,
  headers: { 
    "Content-Type": "application/json" 
  }
});

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


// Axios.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     return config;
//   },
//   (error: any) => {
//     Promise.reject(error);
//   }
// );

// Axios.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },

//   (error: any) => {
//     Promise.reject(error);
//   }
// );

export default Axios;