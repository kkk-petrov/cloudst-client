import { AuthService } from "./AuthService";
import { FilesService } from "./FilesService";

const authService = new AuthService();
const filesService = new FilesService();

export { authService, filesService };

