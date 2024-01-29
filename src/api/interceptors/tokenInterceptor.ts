import { AxiosInstance } from "axios";

export const addTokenInterceptor = async (axiosInstance: AxiosInstance) => {
  const token = localStorage.getItem('token') || null

  axiosInstance.interceptors.request.use(async (config) => {
    try {
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    } catch (error) {
      console.error('Error attaching token to request:', error);
      return Promise.reject(error);
    }
  });
};
