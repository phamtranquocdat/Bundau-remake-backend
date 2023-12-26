import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log("Connect DB successfully")
    } catch (error) {
        console.log("Connect DB fail")
    }
}