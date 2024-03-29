import axios from "axios";
import { addJWTInterceptor } from "./interceptors/jwt.interceptor";

const config = {
	BASE_URL: import.meta.env.VITE_REACT_APP_API_URL,
};

export async function getAxiosInstance() {
	if (!config.BASE_URL) throw new Error("BASE_URL is not defined.");

	const instance = axios.create({ baseURL: config.BASE_URL });

	addJWTInterceptor(instance);

	return instance;
}
