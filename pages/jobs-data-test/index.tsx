import { Page } from "@/components/globals";
import { Box, Row } from "@/components/ui-ux";
import datasource from "@/data-layer";
import { JobData, JobSkill } from "@/data-layer/job-entities";
import { JobApiResponse } from "@/services/jobService";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const jobs: JobApiResponse = await datasource.getJobs();

  // console.log("Companies at HomePage:", companies);

  const companyData = jobs.data; // This will be of type CompanyData[].
  const companyMeta = jobs.meta; // This will be of type { pagination: Pagination }.

  // Can even destructure data and meta properties:
  const { data, meta } = jobs;

  return {
    props: {
      jobs,
    },
    revalidate: 5,
  };
};

export default function HomePage({ jobs }: { jobs: JobApiResponse }) {
  console.log("Job Api Response - jobs data test:", jobs);
  return (
    <>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">
            This is a starting point for ... Next.js 13 (no App router){" "}
          </h1>
          <Box>
            <h2>Company Names (w/ New Pattern): </h2>
            {jobs &&
              jobs.data.map((job: JobData) => (
                <div key={job.attributes.slug}>
                  <li>
                    <span className="font-bold text-indigo-500">
                      JOB SKILL:{" "}
                    </span>
                    {job.attributes.skillTags.data.map((item) => (
                      <li className="p-3 bg-gray-500 text-white">
                        {item.attributes.name}
                      </li>
                    ))}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">Slug: </span>
                    {job.attributes.slug}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">Title: </span>
                    {job.attributes.title}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Date Posted:{" "}
                    </span>
                    {job.attributes.datePosted}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">Salary: </span>
                    {job.attributes.annualSalary}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Job Type:{" "}
                    </span>
                    {job.attributes.jobType}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Description:{" "}
                    </span>
                    {job.attributes.jobDescription}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Category:{" "}
                    </span>
                    {job.attributes.jobCategory}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">Company: </span>
                    {job.attributes.company.data.attributes.name}
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Company Logo:{" "}
                    </span>
                    {
                      job.attributes.company.data.attributes.logo.data
                        .attributes.url
                    }
                  </li>
                  <li>
                    <span className="font-bold text-indigo-500">
                      Company Image:{" "}
                    </span>
                    {
                      job.attributes.company.data.attributes.coverImage.data
                        .attributes.url
                    }
                  </li>
                </div>
              ))}
          </Box>
          <Box>
            <h2>Meta: Pagination </h2>
            {jobs && (
              <>
                <li>PAGE: {jobs.meta.pagination.page}</li>
                <li>PAGE SIZE: {jobs.meta.pagination.pageSize}</li>
                <li>PAGE COUNT: {jobs.meta.pagination.pageCount}</li>
                <li>PAGE TOTAL: {jobs.meta.pagination.total}</li>
              </>
            )}
          </Box>
        </Row>
      </Page>
    </>
  );
}
