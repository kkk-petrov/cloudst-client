import axios from "axios";
import { addJWTInterceptor } from "./interceptors/jwt.interceptor";
import { config } from "./config";

export function getAxiosInstance() {
  if (!config.BASE_URL) throw new Error("BASE_URL is not defined.");

  const instance = axios.create({ baseURL: config.BASE_URL });

  addJWTInterceptor(instance);

  return instance;
}
