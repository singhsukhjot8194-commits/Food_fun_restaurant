import express from "express";
import { SendReservation } from "../controller/reservation.js";
const router = express.Router();

router.post("/send", SendReservation);
export default router;