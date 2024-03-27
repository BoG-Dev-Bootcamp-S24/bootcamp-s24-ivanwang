import connectDB from "..";
import Ticket from "../models/Ticket";
import { ObjectId } from "mongodb";

export default async function createTicket(TicketInfo) {
    try {
        await connectDB();
        const data = new Ticket({lineColor: TicketInfo.lineColor, station: TicketInfo.station, userId: new ObjectId(TicketInfo.userId)});
        await data.save();
        return true
    } catch (error) {
        return false
    }
}