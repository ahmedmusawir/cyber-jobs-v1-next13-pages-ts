// import * as strapiJobAPI from "./strapi/job";
// import { JobDataSource } from "./strapi/job-entities";
import * as strapiCompanyAPI from "./company";
import { CompanyDataSource } from "./company-entities";

interface DataSource extends CompanyDataSource {}
// interface DataSource extends JobDataSource, CompanyDataSource {}

const datasource: DataSource = { ...strapiCompanyAPI };
// const datasource: DataSource = { ...strapiJobAPI, ...strapiCompanyAPI };

export default datasource;
