import ErrorHandler from "../error/error.js"; // Fixed relative path
import { Reservation } from "../models/reservationSchema.js"; // Fixed typo 'module' -> 'models'

export const SendReservation = async(req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // 1. Check if ANY required field is missing
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the full reservation form!", 400));
    }

    // 2. Try creating the reservation in MongoDB
    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation sent Successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationError = Object.values(error.errors).map((err) => err.message);

            return next(new ErrorHandler(validationError.join(", "), 400));
        }
        return next(error);
    }
};