import { AxiosInstance } from "axios";

export const addTokenInterceptor = async (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    try {

      let token: string | null = null

      // if (session && session.user) {
      //   token = (session.user as { token: string }).token;
      // }

      token = "token"
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    } catch (error) {
      console.error('Error attaching token to request:', error);
      return Promise.reject(error);
    }
  });
};
