import mongoose from 'mongoose';

export default async function connectDB() {
    if (mongoose.connection[0]?.readyState) {    //check if in ready state
        return;
    }

    await mongoose.connect(process.env.DB_URL, {dbName : process.env.DP_Name}).catch((e) => {
        console.error("Error connecting", e);
        throw e;
    });
}