import express from "express";
import cors from "cors";
import { router } from "./routes";
import body_parser from "body-parser";
import "dotenv/config";
import helmet from "helmet";

const app = express();
if (!process.env.PORT) {
  console.error("PORT environment variable is required but not defined.");
  process.exit(1);
}
const port = process.env.PORT;
app.use(helmet());
app.use(cors());
app.use(body_parser.json());

app.use("/api/v1", router);

const server = app.listen(port);

// Server Error Handling
const onError = (error) => {
  if (error.syscall !== "listening") throw error;
  else if (error.code === "EACCES") {
    process.stdout.write(`${port} requires elevated privileges\n`);
    process.exit(1);
  } else if (error.code === "EADDRINUSE") {
    process.stdout.write(`port ${port} is already in use\n`);
    process.exit(1);
  }
  throw error;
};

server.on("error", onError);

// Error Handling
process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection:", reason);
});
process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
  process.exit(1);
});

server.on("listening", () => console.log("Listening to port =>", port));
