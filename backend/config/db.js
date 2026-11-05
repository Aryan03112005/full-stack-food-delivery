// logic to connect with the database 
import mongoose from "mongoose";
import dns from "node:dns";

// Use Google Public DNS to resolve MongoDB SRV records (fixes querySrv ECONNREFUSED on Windows/ISPs)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        throw error;
    }
}