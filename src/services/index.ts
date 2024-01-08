import { AuthService } from "./authService";
import { FilesService } from "./filesService";

const authService = new AuthService();
const filesService = new FilesService();

export { authService, filesService };

