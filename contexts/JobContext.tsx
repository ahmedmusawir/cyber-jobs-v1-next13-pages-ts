import datasource from "@/data-layer";
import { Job } from "@/data-layer/job-entities";
import { JobApiResponse } from "@/services/jobService";
import { useEffectAfterFirstRender } from "@/utils";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SidebarFormState {
  jobTypes: string[];
  experienceLevels: string[];
  remoteOk: boolean;
  featured: boolean;
  baseSalaryOptions: string[];
  baseSalaryBounds: number[];
  selectedTags: string[];
}

// Defining the shape of the context
interface JobContextProps {
  jobs: JobApiResponse;
  currentPage: number;
  sideBarFormState: SidebarFormState;
  searchFormState: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSideBarFormState: React.Dispatch<React.SetStateAction<SidebarFormState>>;
  setSearchFormState: React.Dispatch<React.SetStateAction<string>>;
  setDisplayedJobs: React.Dispatch<React.SetStateAction<JobApiResponse>>;
}

// Creating the context
const JobContext = createContext<JobContextProps | undefined>(undefined);

export const JobProvider = ({
  children,
  jobs,
}: {
  children: ReactNode;
  jobs: JobApiResponse;
}) => {
  // MAIN JOBS TO DISPLAY
  const [displayedJobs, setDisplayedJobs] = useState(jobs);

  // CURRENT PAGE FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // ALL STATES FROM SIDEBAR
  const [sideBarFormState, setSideBarFormState] = useState<SidebarFormState>({
    jobTypes: [],
    experienceLevels: [],
    remoteOk: false,
    featured: false,
    baseSalaryOptions: [],
    baseSalaryBounds: [],
    selectedTags: [],
  });

  // SEARCHBAR TEXT STATE
  const [searchFormState, setSearchFormState] = useState("");

  const findJobs = async (apiUrl: string, formsStates: any) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formsStates),
    });
    const foundJobs = await response.json();
    console.log(foundJobs);
    setDisplayedJobs(foundJobs);
  };

  // trigger a search whenever the sidebar form state changes
  useEffectAfterFirstRender(() => {
    console.log("JobsContext: sideBarFormState", sideBarFormState);

    const formsStates = { searchFormState, sideBarFormState };
    findJobs("api/jobs-search", formsStates);
  }, [sideBarFormState]);

  // trigger a search whenever the search form state changes && length >= 3 -OR- length == 0 (implying a reset)
  useEffectAfterFirstRender(() => {
    if (searchFormState.length >= 3 || searchFormState.length == 0) {
      console.log("JobsContext: searchFormState", searchFormState);
      const formsStates = { searchFormState, sideBarFormState };
      findJobs("api/jobs-search", formsStates);
    }
  }, [searchFormState]);

  return (
    <JobContext.Provider
      value={{
        jobs: displayedJobs,
        currentPage,
        setCurrentPage,
        setDisplayedJobs,
        sideBarFormState,
        setSideBarFormState,
        searchFormState,
        setSearchFormState,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextProps => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};
