import app from "./app";
import config from "./config";
import logger from "./utils/logger";

const startServer = () => {
  app.listen(config.port, () => {
    logger.info(`Server running in ${config.nodeEnv} mode`);
    logger.info(`Backend server listening on port ${config.port}`);
    logger.info(`Access it at http://localhost:${config.port}`);
    logger.info(
      `Market news endpoint: http://localhost:${config.port}/api/news`
    );
  });
};

startServer();
