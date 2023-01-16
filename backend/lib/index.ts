import express from "express";
import { MongoConnection } from "./db/mongoDB";

const app = express();
app.use(express.json());

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT, () => {
  console.log("App is running on port: " + PORT);
  MongoConnection();
});
