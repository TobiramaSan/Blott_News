import express, { Application } from "express";
import cors from "cors";
import config from "./config";

import errorHandler from "./middleware/errorHandler";
import newsRoutes from "./routes/newsRoutes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (_req, res) => {
  res.send("Finnhub Backend is running!");
});

app.use("/api/news", newsRoutes);
app.use(errorHandler);

export default app;
