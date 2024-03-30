import { AxiosInstance } from "axios";
import { ApiService } from "./ApiService";
import type { ID } from "@/types/common";
import { endpoints } from "@/api/config";
import { FileModel } from "@/types/models";

interface Opts {
  limit?: number;
  recent?: boolean;
}

export class FilesService extends ApiService {
  private readonly endpoints

  constructor(axios: AxiosInstance) {
    super(axios, "/files");
    this.endpoints = endpoints.files
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
      .then((res) => res.data);
  }

  public async getAll(opts?: Opts) {
    const params = new URLSearchParams;

    if (opts) {
      if (opts?.limit) {
        params.set("limit", opts.limit.toString());
      }

      if (opts?.recent) {
        params.set("recent", '');
      }
    }

    const url = `${this.endpoints.getAll}?${params.toString()}`;

    return this
      .request<FileModel[]>("GET", url)
      .then((res) => res.data);
  }

  public async getOne(id: ID) {
    return this
      .request("GET", this.endpoints.getOne(id))
      .then((res) => res.data);
    ;
  }

  public async delete(_id: string) {
    throw new Error("Delete functionality not implemented yet");
  }

  public async update(_id: string, _data: any) {
    throw new Error("Update functionality not implemented yet");
  }
}
