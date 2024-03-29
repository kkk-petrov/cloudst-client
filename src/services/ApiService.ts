import type { ApiRequestData } from "@/types/api";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiService {
	protected readonly axios: AxiosInstance;
	protected readonly baseUrl: string;

	constructor(axios: AxiosInstance, baseUrl: string) {
		this.axios = axios;
		this.baseUrl = baseUrl;
	}

	protected async request<T>(
		method: string,
		url?: string,
		data?: ApiRequestData | null,
		opts?: AxiosRequestConfig,
	): Promise<AxiosResponse<T>> {
		try {
			const res = await this.axios.request({
				url: this.baseUrl + url,
				method,
				data,
				...opts,
			});
			return res;
		} catch (error) {
			throw new Error(`Error during request: ${error}`);
		}
	}
}
