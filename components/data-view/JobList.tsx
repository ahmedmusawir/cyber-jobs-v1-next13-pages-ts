import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import db from "../../data/jobs.json";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const JobList = () => {
  const jobs = db.data;
  //   console.log("Local Data:", jobs);
  const baseUrl = "http://localhost:1337";

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none"
    >
      {jobs.map((job) => (
        <li
          key={job.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-lg"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <h5 className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-5">
                {job.attributes.jobType}
              </h5>
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {job.attributes.company.data.attributes.name}
                </h3>
              </div>
              {/* <h1 className="mt-1 truncate text-sm text-gray-500 text-lg"> */}
              <h1 className="mt-2 text-sm text-gray-500 text-lg">
                {job.attributes.title}
              </h1>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
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
                <h5 className="text-sm font-bold p-2">
                  Salary: ${job.attributes.annualSalary}
                </h5>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <h5 className="text-sm font-bold p-2">
                  {job.attributes.jobCategory}
                </h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
