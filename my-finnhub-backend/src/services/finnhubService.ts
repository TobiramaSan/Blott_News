import * as finnhub from "finnhub";
import config from "../config";
import logger from "../utils/logger";

const api_key_auth = finnhub.ApiClient.instance.authentications["api_key"];
api_key_auth.apiKey = config.finnhubApiKey;
const finnhubClient: finnhub.DefaultApi = new finnhub.DefaultApi();

/**
 * Fetches general market news from Finnhub API.
 * @returns {Promise<finnhub.MarketNewsItem[]>}
 */
export const getMarketNews = async (): Promise<finnhub.MarketNewsItem[]> => {
  logger.debug("Calling Finnhub marketNews API...");
  return new Promise((resolve, reject) => {
    finnhubClient.marketNews(
      "general",
      {},
      (error: any, data: finnhub.MarketNewsItem[] | null, response: any) => {
        if (error) {
          logger.error({ error, response }, "Error from Finnhub API call");

          return reject(
            error instanceof Error ? error : new Error(String(error))
          );
        }
        if (!data) {
          logger.warn("Finnhub marketNews returned no data.");
          return resolve([]);
        }
        logger.debug("Successfully received data from Finnhub marketNews.");
        resolve(data);
      }
    );
  });
};
