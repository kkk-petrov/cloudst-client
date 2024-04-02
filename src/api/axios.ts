import axios from "axios";
import { config } from "./config";
import { addJWTInterceptor } from "./interceptors/access.interceptor";

export const createAxiosInstance = () => {
  if (!config.BASE_URL) throw new Error("BASE_URL is not defined.");

  const instance = axios.create({ baseURL: config.BASE_URL });

  addJWTInterceptor(instance);

  return instance;
};
