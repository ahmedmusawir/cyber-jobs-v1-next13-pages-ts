import datasource from "@/data-layer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await datasource.getCompanySlugs();

  res.status(200).json(data);
}
