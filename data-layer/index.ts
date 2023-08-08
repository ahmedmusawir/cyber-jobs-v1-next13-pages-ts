import * as strapiJobAPI from "../data-layer/job";
import * as strapiCompanyAPI from "./company";
import { CompanyDataSource } from "./company-entities";
import { JobDataSource } from "./job-entities";

// interface DataSource extends CompanyDataSource {}
interface DataSource extends JobDataSource, CompanyDataSource {}

// const datasource: DataSource = { ...strapiCompanyAPI };
const datasource: DataSource = { ...strapiJobAPI, ...strapiCompanyAPI };

export default datasource;
