import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8c9379b7c21463494915f8334c4f7d2",
  },
});

class APICLIENT<T>{
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint,config).then(res => res.data)
  }
}

export default APICLIENT;