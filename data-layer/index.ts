import * as strapiJobAPI from "../data-layer/job";
import * as strapiCompanyAPI from "./company";
import * as strapiHomePageAPI from "./home-page";
import { CompanyDataSource } from "./company-entities";
import { HomePageDataSource } from "./home-page-entities";
import { JobDataSource } from "./job-entities";

// interface DataSource extends CompanyDataSource {}
interface DataSource
  extends JobDataSource,
    CompanyDataSource,
    HomePageDataSource {}

// const datasource: DataSource = { ...strapiCompanyAPI };
const datasource: DataSource = {
  ...strapiJobAPI,
  ...strapiCompanyAPI,
  ...strapiHomePageAPI,
};

export default datasource;
