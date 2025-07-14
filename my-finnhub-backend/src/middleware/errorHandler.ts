import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

interface CustomError extends Error {
  statusCode?: number;
  status?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "An unexpected error occurred.";

  logger.error(
    {
      statusCode,
      message,
      stack: err.stack,
      url: req.originalUrl,
      method: req.method,
      ip: req.ip,
    },
    "Error caught by global error handler"
  );

  res.status(statusCode).json({
    message: statusCode === 500 ? "Internal Server Error" : message,
    ...(process.env.NODE_ENV === "development" && { details: err.stack }),
  });
};

export default errorHandler;
