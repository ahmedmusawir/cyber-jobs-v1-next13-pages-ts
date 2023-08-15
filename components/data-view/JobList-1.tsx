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
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
