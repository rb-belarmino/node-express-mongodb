import express from "express";
import databaseConnect from "./config/DbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnect();

connection.on("error", (error) => console.error("Connection error", error));

connection.once("open", () => {
  console.log("Database connected");
});

const app = express();
routes(app);

export default app;
