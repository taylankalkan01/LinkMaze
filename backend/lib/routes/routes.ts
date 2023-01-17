import express, { Application, Request, Response } from "express";
import authRoutes from "./authRoutes";

// import shortUrlSchema from "../schemas/createShortUrl.schema";

export function initRoutes(app:Application) {
  app.use("/api/auth",authRoutes)
}