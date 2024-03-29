import { getAxiosInstance } from "@/api/axios";
import { AuthService } from "./AuthService";
import { FilesService } from "./FilesService";
import { UserService } from "./UserService";

const axios = await getAxiosInstance();

const authService = new AuthService(axios);
const userService = new UserService(axios);
const filesService = new FilesService(axios);

export { authService, userService, filesService };
