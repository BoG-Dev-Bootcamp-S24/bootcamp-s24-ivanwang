import connectDB from "..";
import Ticket from "../models/Ticket";
import User from "../models/User";
import { ObjectId } from "mongodb";


export default async function readTicketsByUser(info) {
    try {
        await connectDB();
        if (!(await User.findById({_id: info.userId}))) {
            return ["nouser"]
        }
        const data = await Ticket.find({userId: new ObjectId(info.userId)});
        console.log(data)
        return data
    } catch (error) {
        return false;
    }
    

}