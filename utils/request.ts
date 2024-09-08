import axios from "axios";
export const HTTP_CLIENT = axios.create({
  baseURL: "https://api.coinofficial.io/",
});
export const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config) => {
      const authToken = "";
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};
