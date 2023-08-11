import Link from "next/link";
import JobCard from "./JobCard";
import { JobApiResponse } from "@/services/jobService";
import Pagination from "./Pagination";
import { useState } from "react";

const JobList = ({ jobs }: { jobs: JobApiResponse }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { total } = jobs.meta.pagination;
  const pageSize = 8;
  const totalPageCount = Math.ceil(total / pageSize);

  const currentPageJobs = jobs.data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // This will update the current page state, and based on this, you can filter/display jobs accordingly.
    // If you need to load new jobs from API on page change, you'd do that here as well.
  };

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none"
      >
        {currentPageJobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.attributes.slug}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </ul>

      <Pagination
        currentPage={jobs.meta.pagination.page}
        totalPageCount={totalPageCount}
        onPageChange={onPageChange}
        pageSize={pageSize}
        totalItemCount={jobs.meta.pagination.total}
      />
    </>
  );
};

export default JobList;
