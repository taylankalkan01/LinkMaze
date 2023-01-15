import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.APP_PORT || 3001;
app.listen(PORT, () => {
  console.log("App is running on port: " + PORT);
});
