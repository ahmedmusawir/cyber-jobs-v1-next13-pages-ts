import { NextApiRequest, NextApiResponse } from "next";
import datasource from "../../data-layer/";

// Example:
// http://localhost:3000/api/company-by-slug?slug=microsoft-inc

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || Array.isArray(slug)) {
    res.status(400).json({ message: "Slug is missing from the request." });
    return;
  }

  const data = await datasource?.getCompanyBySlug("microsoft-inc");
  res.status(200).json(data);
}
