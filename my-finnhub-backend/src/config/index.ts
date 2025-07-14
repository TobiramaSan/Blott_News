import "dotenv/config";

interface AppConfig {
  port: number;
  frontendUrl: string;
  finnhubApiKey: string;
  nodeEnv: string;
}

const config: AppConfig = {
  port: parseInt(process.env.PORT || "5000", 10),
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  finnhubApiKey: process.env.FINNHUB_API_KEY || "",
  nodeEnv: process.env.NODE_ENV || "development",
};

if (!config.finnhubApiKey) {
  console.error(
    "CRITICAL ERROR: FINNHUB_API_KEY is not set in environment variables."
  );
  process.exit(1);
}

export default config;
