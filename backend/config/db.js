// logic to connect with the database 
import mongoose from "mongoose";
import dns from "node:dns";

// Use Google Public DNS to resolve MongoDB SRV records (fixes querySrv ECONNREFUSED on Windows/ISPs)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI || 'mongodb+srv://itzaryan2015_db_user:Ridhi0319@cluster0.l6b4tnb.mongodb.net/full_stack_food_del';
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
    }
};
