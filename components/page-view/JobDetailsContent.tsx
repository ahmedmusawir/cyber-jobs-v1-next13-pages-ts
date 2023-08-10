import {
  BanknotesIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { JobData } from "@/data-layer/job-entities";
import ReactMarkdown from "react-markdown";
import styles from "./JobDetailsContent.module.scss";
import { formatDate } from "@/utils";
import accounting from "accounting";
import { Page } from "../globals";

interface Props {
  job: JobData;
}

const JobDetailsContent = ({ job }: Props) => {
  // console.log("Single Job: - JobDetailsContent", job);
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL;

  return (
    <>
      <Head>
        <title>Job Details</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <div className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <Link
                    className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-5"
                    href={"/jobs"}
                  >
                    Back To Job Board
                  </Link>

                  <h2 className="text-base font-semibold leading-7 text-indigo-600 my-5">
                    {job.attributes.featured && (
                      <span className="inline-flex items-center rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white float-right">
                        Featured
                      </span>
                    )}
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-[.60rem] font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-3">
                      {job.attributes.jobType.toLocaleUpperCase()}
                    </span>

                    {job.attributes.remoteOk && (
                      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-[.60rem] font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-3">
                        REMOTE OK{" "}
                      </span>
                    )}
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-[.60rem] font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-3">
                      {job.attributes.jobCategory.toUpperCase()}
                    </span>
                  </h2>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-purple-600 sm:text-4xl">
                    {job.attributes.title}
                  </p>

                  <div className={styles.strapiMarkdownRichText}>
                    <ReactMarkdown>
                      {job.attributes.jobDescription}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="mx-auto max-w-2xl text-center shadow-lg bg-gray-200 py-10 px-8">
                  <img
                    className="h-20 w-20 flex-shrink-0 rounded-full bg-gray-300 mx-auto mb-5"
                    src={
                      baseUrl +
                      job.attributes.company.data.attributes.logo.data
                        .attributes.url
                    }
                    alt={job.attributes.title}
                  />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {job.attributes.company.data.attributes.name}
                  </h2>
                  <h4>{job.attributes.company.data.attributes.city}</h4>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Apply Today
                    </a>
                    <Link
                      href={`/company/${job.attributes.company.data.attributes.slug}`}
                      className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      All Company Jobs
                    </Link>
                  </div>
                </div>
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <WrenchScrewdriverIcon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        Skills Necessary:
                      </dt>{" "}
                      <dd className="inline">
                        {job.attributes.skillTags.data.map((skill) => (
                          <span key={skill.id} className="pr-2">
                            {skill.attributes.name}
                          </span>
                        ))}{" "}
                      </dd>
                    </div>
                  </dl>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <BanknotesIcon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        Annual Salary:
                      </dt>{" "}
                      <dd className="inline">
                        ${accounting.formatNumber(job.attributes.annualSalary)}
                      </dd>
                    </div>
                  </dl>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CalendarDaysIcon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        Posted On:
                      </dt>{" "}
                      <dd className="inline">
                        {formatDate(job.attributes.datePosted)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default JobDetailsContent;
