import mongoose, { Types } from "mongoose";

export interface ISlot {
    _id?: Types.ObjectId;
    date: string;
    time: string;
    bookedSlot: number;
    availableSlot: number;
}
const slotSchema = new mongoose.Schema<ISlot>(
    {
        date: {
            type: String,
            required: [true, "Date is required"],
            trim: true,
        },
        time: {
            type: String,
            required: [true, "Slot time is required"],
            trim: true
        },
        bookedSlot: {
            type: Number,
            default: 0,
            trim: true
        },
        availableSlot: {
            type: Number,
            default: 10,
            trim: true
        }

    }

);


export default mongoose.model<ISlot>('Slot', slotSchema);