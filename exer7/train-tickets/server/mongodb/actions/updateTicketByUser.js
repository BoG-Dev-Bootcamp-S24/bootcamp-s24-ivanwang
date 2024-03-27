import connectDB from "..";
import Ticket from "../models/Ticket";
import User from "../models/User";

export default async function updateTicketByUser(TicketInfo) {
    try {
        await connectDB();
        if (!(await User.findById({_id: TicketInfo.UserID}))) {
            return []
        }
        const data = await Ticket.findByIdAndUpdate({_id: TicketInfo.TicketID}, {userId: TicketInfo.UserID})
        if (!data) {
            return "NoTix"
        }
        return data;
    } catch (error) {
        return false
    }
}