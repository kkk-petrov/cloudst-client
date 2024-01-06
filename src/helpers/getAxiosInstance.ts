import axios from "axios";
import { getSession } from "next-auth/react";

export const getAxiosInstance = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    throw new Error("API_URL is not defined.");
  }

  try {
    console.log("ok 1")

    const session = await getSession();

    let token: string | null = null
    if (session && session.user) {
      token = (session.user as { token: string }).token;
    }
    console.log("ok 2")

    return axios.create({
      baseURL: API_URL,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  } catch (error) {
    console.error('Error creating Axios instance:', error);

    return null;
  }
};
