import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketId, userId } = data;
        const updatedTicket = await Ticket.findByIdAndUpdate(
            ticketId,
            userId,
            { new: true }
        );
        if (updatedTicket) {
            return true;
        } else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}