import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const Axios =  axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 50000,
  headers: { 
    "Content-Type": "application/json" 
  }
});

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default Axios;