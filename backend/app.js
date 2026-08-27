import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express()
dotenv.config({ path: "./config.env" })
app.use(cors({
    origin: ["https://food-fun-restaurant.vercel.app"],
    methods: ["POST"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbConnection();
app.use(errorMiddleware);
export default app;