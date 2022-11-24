import mongoose, { Types } from "mongoose";

const slotSchema = new mongoose.Schema(
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
        totalSlot: {
            type: Number,
            required: [true, "Total slot is required"],
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

export interface ISlot {
    _id?: Types.ObjectId;
    date: string;
    time: string;
    totalSlot: number;
    bookedSlot: number;
    availableSlot: number;
}

export default mongoose.model<ISlot>('Slot', slotSchema);