import axios from "axios";
import { addTokenInterceptor } from "./interceptors/tokenInterceptor";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAxiosInstance() {
  if (!API_URL) throw new Error("API_URL is not defined.");

  const instance = axios.create({ baseURL: API_URL });

  addTokenInterceptor(instance)

  return instance
};
