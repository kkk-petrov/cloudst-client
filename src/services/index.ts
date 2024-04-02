import { createAxiosInstance } from "@/api/axios";
import { AuthService } from "./AuthService";
import { FilesService } from "./FilesService";
import { UserService } from "./UserService";

const axiosInstance = createAxiosInstance();

const authService = new AuthService(axiosInstance);
const userService = new UserService(axiosInstance);
const filesService = new FilesService(axiosInstance);

export { authService, userService, filesService };
