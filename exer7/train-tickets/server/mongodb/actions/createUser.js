import connectDB from "..";
import User from "../models/User";

export default async function createUser(userInfo) {
    try {
        await connectDB();
        const data = new User(userInfo)
        await data.save()
        return true
    } catch (error) {
        return false
    }
}
