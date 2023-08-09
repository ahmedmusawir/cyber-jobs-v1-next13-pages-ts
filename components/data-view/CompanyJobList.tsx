import Link from "next/link";
import JobCard from "./JobCard";
import { JobData } from "@/data-layer/job-entities";
import CompanyJobCard from "./CompanyJobCard";

const CompanyJobList = ({ jobs }: { jobs: JobData[] | undefined }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none"
    >
      {jobs?.map((job) => (
        <Link key={job.id} href={`/jobs/${job.attributes.slug}`}>
          <CompanyJobCard job={job} />
        </Link>
      ))}
    </ul>
  );
};

export default CompanyJobList;
