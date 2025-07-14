// src/api/finnhub.ts
import axios from "axios";

// Define the type for your news item (re-exported for use in other files)
export interface NewsItem {
  category: string;
  datetime: number; // Unix timestamp
  headline: string;
  id: number;
  image: string;
  source: string;
  summary: string;
  url: string;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
const NEWS_ENDPOINT = `${API_BASE_URL}/api/news`;

/**
 *
 *
 * @returns {Promise<NewsItem[]>}
 * @throws {Error}
 */
export const fetchMarketNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get<NewsItem[]>(NEWS_ENDPOINT);
    return response.data;
  } catch (err: any) {
    let errorMessage: string;

    if (axios.isAxiosError(err)) {
      if (err.response) {
        errorMessage = `Server Error: ${err.response.status} - ${
          err.response.data?.message || err.message
        }`;
      } else if (err.request) {
        errorMessage =
          "Network Error: No response from server. Please check your backend connection.";
      } else {
        errorMessage = `Request Error: ${err.message}`;
      }
    } else {
      errorMessage = `Unknown Error: ${
        err.message || "An unknown error occurred."
      }`;
    }
    console.error("API Service Error:", errorMessage, err);
    throw new Error(errorMessage);
  }
};
