import connectDB from "..";
import Ticket from "../models/Ticket";

 export default async function deleteTicket(id) {
    try {
        await connectDB();
        console.log(id)
        console.log(await Ticket.findOneAndDelete({_id: id.ticketID}));
        return true
    } catch (error) {
        return false;
    }
}