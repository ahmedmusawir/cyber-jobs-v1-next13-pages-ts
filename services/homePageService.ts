import { HomePageData } from "@/data-layer/home-page-entities";
import HttpService, { ApiResponseSingle } from "./httpService";

export type HomePageApiResponse = ApiResponseSingle<HomePageData>;

// Response is a single object
const homePageService = new HttpService<HomePageData>("/cyber-jobs-home");

export default homePageService;
