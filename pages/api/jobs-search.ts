import { NextApiRequest, NextApiResponse } from "next";
import datasource from "../../data-layer/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchFormState, sideBarFormState } = req.body;

  const minBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.min(...sideBarFormState.baseSalaryBounds)
      : 0;

  const maxBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.max(...sideBarFormState.baseSalaryBounds)
      : 1000000;

  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
    minBaseSalary,
    maxBaseSalary,
  };

  console.log(query);
  const jobs = await datasource.searchJobs(query);
  // const jobs = await datasource.searchJobs({remoteOk: true, featured: true});
  // const jobs = await datasource.searchJobs({jobTypes: ["contract"], remoteOk: true});
  res.status(200).json(jobs);
}
