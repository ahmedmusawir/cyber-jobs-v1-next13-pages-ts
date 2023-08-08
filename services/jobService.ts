import HttpService, { ApiResponse } from "./httpService";
import { JobData } from "@/data-layer/job-entities";

export type JobApiResponse = ApiResponse<JobData>;

const jobService = new HttpService<JobData>("/jobs");

export default jobService;
