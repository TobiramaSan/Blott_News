import { Router, Request, Response, NextFunction } from "express";
import { getMarketNews } from "../services/finnhubService";
import logger from "../utils/logger";

const router = Router();

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  logger.info("GET /api/news received.");
  try {
    const news = await getMarketNews();
    res.status(200).json(news);
    logger.info("GET /api/news responded successfully.");
  } catch (error) {
    logger.error({ error }, "Error in /api/news route");
    next(error);
  }
});

export default router;
