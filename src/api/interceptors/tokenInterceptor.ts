import { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export const addTokenInterceptor = async (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    try {
      const session = await getSession();

      let token: string | null = null
      if (session && session.user) {
        token = (session.user as { token: string }).token;

        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      console.error('Error attaching token to request:', error);
      return Promise.reject(error);
    }
  });
};
