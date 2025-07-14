import pino from "pino";
import config from "../config";

const logger = pino({
  level: config.nodeEnv === "production" ? "info" : "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export default logger;
