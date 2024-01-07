import { FilesRequest, FilesResponse } from "@/types/requests";
import { ApiService } from "./apiService";


export class FilesService {
  private apiService: ApiService<FilesRequest, FilesResponse>;

  constructor(apiService: ApiService<FilesRequest, FilesResponse>) {
    this.apiService = apiService
  }

  public async getAll(userId: number) {

  }

  public async getOne() {

  }

  public async delete() {

  }

  public async update() {

  }
}
