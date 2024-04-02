import type { ApiRequestData } from "@/types/api";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiService {
  protected readonly axios: AxiosInstance;
  protected readonly groupUrl: string;

  constructor(axios: AxiosInstance, groupUrl: string) {
    this.axios = axios;
    this.groupUrl = groupUrl;
  }

  protected async request<T>(
    method: string,
    url: string,
    data?: ApiRequestData | null,
    opts?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const res = await this.axios.request({
        url: this.groupUrl + url,
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
