import { authService } from "@/services";
import type { AxiosInstance } from "axios";

export const addJWTInterceptor = (axios: AxiosInstance) => {
	axios.interceptors.request.use(
		async (config) => {
			const token = localStorage.getItem("token");
			if (token) {
				console.log("token", token);
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		},
		async (error) => Promise.reject(error),
	);

	axios.interceptors.response.use(
		(response) => response,
		async (error) => {
			const config = error?.config;

			if (!config) return Promise.reject(error);

			if (error.response?.status === 401 && !config.sent) {
				config.sent = true;
				const refreshedToken = await authService
					.refresh()
					.then((res) => res.data);

				if (refreshedToken) {
					localStorage.setItem("token", refreshedToken);
					console.log("token refreshed successfully");

					config.headers.Authorization = `Bearer ${refreshedToken}`;

					return axios(config);
				}
			}

			return Promise.reject(error);
		},
	);
};
