import HttpService, { ApiResponse } from "./httpService";
import { CompanyData } from "@/data-layer/company-entities";

export type CompanyApiResponse = ApiResponse<CompanyData>;

const companyService = new HttpService<CompanyData>("/companies");

export default companyService;
