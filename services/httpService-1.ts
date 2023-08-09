// httpService.ts
import apiClient from "./strapiApiClient";

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}

class HttpService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(query?: string): Promise<ApiResponse<T>> {
    const res = await apiClient.get(`${this.endpoint}?${query}`);
    return res.data;
  }

  async get(query?: string): Promise<ApiResponse<T>> {
    const res = await apiClient.get(`${this.endpoint}?${query}`);
    return res.data;
  }

  async getOneBySlug(query?: string): Promise<T> {
    const res = await apiClient.get(`${this.endpoint}?${query}`);
    return res.data.data[0];
  }
}

export default HttpService;
