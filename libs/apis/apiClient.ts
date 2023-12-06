import axios, { AxiosError } from "axios";

const host = process.env.NEXT_PUBLIC_WARP_API_HOST;

const apiClient = axios.create({
  baseURL: host,
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem("user-storage") as string).state.user
        .googleAuthToken
    }`;
    return config;
  },
  (error) => {
    return Promise.reject(`[Error] axios interceptor: ${error}`);
  }
);

export default apiClient;
