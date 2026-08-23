import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Path setup (ESM ke liye)
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// Ek folder piche (Root Folder mein) jaakar .env load karein
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Connected to database successfully!");
    }).catch(err => {
        console.log(`Some error occured while connecting to database: ${err}`);
    });
};

export default dbConnection;