import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import db from "../../data/jobs.json";
import Link from "next/link";
import JobCard from "./JobCard";
import { JobApiResponse } from "@/services/jobService";

const JobList = ({ jobs }: { jobs: JobApiResponse }) => {
  // const jobs = db.data;
  // const baseUrl = "http://localhost:1337";
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_BASE_URL;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none"
    >
      {jobs.data.map((job) => (
        <Link key={job.id} href={`/jobs/${job.attributes.slug}`}>
          <JobCard job={job} />
        </Link>
      ))}
    </ul>
  );
};

export default JobList;
