import { getAxiosInstance } from "@/api/getAxiosInstance";
import { AuthService } from "./AuthService";
import { FilesService } from "./FilesService";
import { UsersService } from "./UsersService";

const axios = await getAxiosInstance();

const authService = new AuthService(axios);
const usersService = new UsersService(axios);
const filesService = new FilesService();

export { authService, usersService, filesService };
