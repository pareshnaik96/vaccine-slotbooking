import mongoose, { Types } from "mongoose";


export interface IBooking {
    userId?: Types.ObjectId;
    doseType: string;
    slotDate: string;
    slotTime: string;
    status: string;
    cancellable: boolean;
}

const bookingSchema = new mongoose.Schema<IBooking>(
    {
        userId: {
            type: Types.ObjectId,
            required: [true, "userId is required"],
            refs: 'User',
            trim: true
        },
        doseType: {
            type: String,
            required: [true, "doseType is required"],
            enum: ["First", "Second"],
            trim: true
        },
        slotDate: {
            type: String,
            required: [true, "slot Date is required"],
            trim: true,
        },
        slotTime: {
            type: String,
            required: [true, "Slot time is required"],
            trim: true
        },
        status: {
            type: String,
            enum: ["pending", "completed", "cancelled"],
            default: "pending"
        },
        cancellable: {
            type: Boolean,
            default: true
        }

    }

);



export default mongoose.model<IBooking>('Booking', bookingSchema);
