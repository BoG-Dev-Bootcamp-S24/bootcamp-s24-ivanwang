import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const Schema = mongoose.Schema;
const ticketSchema = new Schema({
    lineColor: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
});
export default mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema);