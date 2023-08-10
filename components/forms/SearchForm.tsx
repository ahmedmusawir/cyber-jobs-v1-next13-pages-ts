import { useJobs } from "@/contexts/JobContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchForm = () => {
  const { searchFormState, setSearchFormState } = useJobs();

  return (
    <form className="relative flex flex-1" action="#" method="GET">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <MagnifyingGlassIcon
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
        aria-hidden="true"
      />
      <input
        id="search-field"
        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
        placeholder="Search..."
        type="search"
        name="search"
        value={searchFormState}
        onChange={(e) => setSearchFormState(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
