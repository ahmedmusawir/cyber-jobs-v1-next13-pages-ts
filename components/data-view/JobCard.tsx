import { JobData } from "@/data-layer/job-entities";
import React from "react";
import accounting from "accounting";
import { formatDate } from "@/utils";

// console.log(accounting.formatNumber(125000)); // Outputs: "125,000"

interface JobSingle {
  job: JobData;
}

const JobCard = ({ job }: JobSingle) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL;

  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg pt-3">
      <h5 className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-2 text-[.65rem] font-medium text-green-700 ring-1 ring-inset ring-green-600/20 my-1 ml-2">
        {job.attributes.jobType}
      </h5>
      {job.attributes.featured && (
        <h5 className="inline-flex flex-shrink-0 items-center rounded-full bg-red-100 px-2 text-[.65rem] font-medium text-green-700 ring-1 ring-inset ring-green-600/20 my-1 ml-2">
          Featured
        </h5>
      )}
      {job.attributes.remoteOk && (
        <h5 className="inline-flex flex-shrink-0 items-center rounded-full bg-orange-100 px-2 text-[.65rem] font-medium text-green-700 ring-1 ring-inset ring-green-600/20 my-1 ml-2">
          Remote
        </h5>
      )}
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {job.attributes.company?.data.attributes.name}
            </h3>
          </div>
          <h1 className="mt-2 text-sm text-gray-500 text-lg truncate">
            {job.attributes.title}
          </h1>

          <h5 className="text-[.59rem] font-bold text-gray-800 mt-2">
            <span className="">Posted:</span>
            {formatDate(job.attributes.datePosted)}
          </h5>
        </div>
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 mb-10"
          src={
            baseUrl +
            job.attributes.company.data.attributes.logo.data.attributes.url
          }
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <h5 className="text-xs font-bold p-2 text-purple-600 mt-2 ml-2">
              <span className="text-[.59rem]">Salary:</span> $
              {accounting.formatNumber(job.attributes.annualSalary)}
            </h5>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <h5 className="text-[.59rem] font-bold p-2">
              {job.attributes.jobCategory}
            </h5>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
