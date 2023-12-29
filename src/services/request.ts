import axios, { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export const getAxiosInstance = async (): Promise<AxiosInstance | null> => {
  try {
    const API_URL = process.env.API_URL;
    const session = await getSession();

    if (!session || !session.user) {
      return null;
    }

    const { token } = session.user as { token: string; user: any };

    return axios.create({
      baseURL: API_URL,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error creating Axios instance:', error);
    return null;
  }
};
