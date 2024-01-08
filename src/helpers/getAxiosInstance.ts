import axios, { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export async function getAxiosInstance() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    throw new Error("API_URL is not defined.");
  }

  try {
    const session = await getSession();

    let token: string | null = null
    if (session && session.user) {
      token = (session.user as { token: string }).token;
    }

    return axios.create({
      baseURL: API_URL,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  } catch (error) {
    console.error('Error creating Axios instance:', error);

    return null;
  }
};
