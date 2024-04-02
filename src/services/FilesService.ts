import { AxiosInstance } from "axios";
import { ApiService } from "./ApiService";
import type { ID } from "@/types/common";
import { endpoints } from "@/api/config";
import { FileModel } from "@/types/models";
import { FileRequestOpts, StorageInfo, UpdateFileData } from "@/types/api";

export class FilesService extends ApiService {
  private readonly endpoints = endpoints.files

  constructor(axios: AxiosInstance) {
    super(axios, "/files");
  }

  public async download(id: ID) {
    const res = await super.request("GET", this.endpoints.download(id), {}, {
      responseType: "blob",
    });

    if (res.data instanceof Blob) {
      const blob = res.data;
      const filename = res.headers["x-filename"];

      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = filename;
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    } else {
      console.error("Unexpected download response format");
    }
  }

  public async upload(files: FormData) {
    return this
      .request("POST", this.endpoints.upload, files)
  }

  public async getAll(opts?: FileRequestOpts) {
    let params = new URLSearchParams();

    if (opts) {
      if (opts.limit) {
        params.set("limit", opts.limit.toString());
      }

      if (opts.offset) {
        params.set("limit", opts.offset.toString());
      }

      if (opts.recent) {
        params.set("recent", "true");
      }

      if (opts.pinned) {
        params.set("pinned", "true");
      }
    }

    const url = `${this.endpoints.getAll}${params.toString().length > 0 ? `?${params.toString()}` : ''}`;

    console.log(url)
    return this
      .request<FileModel[]>("GET", url)
      .then((res) => res.data);
  }

  public async getOne(id: ID) {
    return this
      .request<FileModel>("GET", this.endpoints.getOne(id))
      .then((res) => res.data);
    ;
  }

  public async getStorageInfo() {
    return this
      .request<StorageInfo>("GET", this.endpoints.getStorageInfo)
      .then((res) => res.data);
  }

  public async delete(_id: string) {
    throw new Error("Delete functionality not implemented yet");
  }

  public async update(id: ID, data: UpdateFileData) {
    return this
      .request<FileModel>("PUT", this.endpoints.update(id), data)
      .then((res) => res.data);
  }
}
