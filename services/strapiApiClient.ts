// apiClient.ts
import axios from "axios";

const strapiApiKey = process.env.STRAPI_API_KEY;
const strapiApiUrl = process.env.STRAPI_API_BASE_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${strapiAPIKey}`;

const apiClient = axios.create({
  baseURL: strapiApiUrl,
  headers: { Authorization: `Bearer ${strapiApiKey}` },
});

// console.log("API KEY:", strapiApiKey);
// console.log("API URL:", strapiApiUrl);
// console.log("API CLIENT:", apiClient);

export default apiClient;
