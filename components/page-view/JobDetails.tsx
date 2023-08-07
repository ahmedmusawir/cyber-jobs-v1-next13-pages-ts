import Head from "next/head";
import React from "react";
import { Row, Page } from "../ui-ux";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const features = [
  {
    name: "Skills Necessary:",
    description: "React.js, Next.js, Typescript, Strapi v4",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Annual Salary:",
    description: "$120,000",
    icon: BanknotesIcon,
  },
  {
    name: "Posted On:",
    description: "August 31, 2023 ",
    icon: CalendarDaysIcon,
  },
];

const JobDetails = () => {
  return (
    <>
      <Head>
        <title>Next Page JobDetails</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <div className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <button
                    type="button"
                    className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-5"
                  >
                    Back To Job Board
                  </button>

                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Full-Time / Remote Ok / Featured
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    The Title of the Job
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The description of the job ... Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis
                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The description of the job ... Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis
                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    The description of the job ... Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis
                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    The description of the job ... Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis
                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="mx-auto max-w-2xl text-center shadow-lg bg-gray-200 py-10 px-8">
                  <img
                    className="h-20 w-20 flex-shrink-0 rounded-full bg-gray-300 mx-auto mb-5"
                    src="https://picsum.photos/id/337/100/100"
                    alt=""
                  />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Company Name
                  </h2>
                  <h4>Company City</h4>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Apply Today
                    </a>
                    <Link
                      href={`/company/company-slug`}
                      // href={`/companies/${company.slug}`}
                      className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      All Company Jobs
                    </Link>
                  </div>
                </div>
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
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

export default JobDetails;
