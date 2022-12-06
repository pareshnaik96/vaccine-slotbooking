import slotModel from "../Models/slotModel"
import { Request, Response } from 'express'
import userModel from "../../../libs/common/userModel"
import bookingModel from "../../../libs/common/bookingModel"

const isValid = function (value: string | number) {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length == 0) return false;
    return true;
};


//================================================== slot booking controller ====================================================//


const createSlot = async function (req: Request, res: Response) {

    try {

        let data = req.body
        const slotData = JSON.parse(data)

        let { date, time } = slotData;

        if (!isValid(date)) {
            return res.status(400).send({ status: false, message: "slotDate is required" });
        }

        if (!isValid(time)) {
            return res.status(400).send({ status: false, message: "slotTime is required" });
        }


        const string = date + " " + time
        const dt = new Date(string)  //converted into millisecond
        const newdt = dt.getTime()   //for getting local time and date (object)

        const newDate = new Date(newdt).toLocaleDateString()
        const newTime = new Date(newdt).toLocaleString().split(',')[1]

        const saveData = {
            date: newDate,
            time: newTime,
        }
        let createSlot = await slotModel.create(saveData)
        return res.status(201).send({ status: true, message: "Slot created successfully", data: createSlot });

    } catch (error: any) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

//===================================================== get slot controller =====================================================//


const getSlot = async function (req: Request, res: Response) {

    try {

        let data = req.query

        let { date, time } = data

        let filter = { availableSlot: { $gt: 0 } }

        if (isValid(date as string)) {
            filter["date"] = date
        }
        if (isValid(time as string)) {
            filter["time"] = time
        }

        let avaliableSlot = await slotModel.find(filter).select({ _id: 0, date: 1, time: 1, totalSlot: 1, bookedSlot: 1, availableSlot: 1 })

        if (avaliableSlot && avaliableSlot.length === 0)
            return res.status(404).send({ status: false, message: "No slot avaliable" })

        return res.status(200).send({ status: true, message: "slot list accessed successfully", data: avaliableSlot })

    } catch (error: any) {
        return res.status(500).send({ status: false, message: error.message })

    }
}


const getUser = async function (req: Request, res: Response) {

    try {

        let data = req.query

        let { age, pincode } = data

        let filter = { ...req.query }

        if (isValid(age as string)) {
            filter["age"] = age
        }

        if (isValid(pincode as string)) {
            filter["pincode"] = pincode
        }

        let getUser = await userModel.find(filter).select({ _id: 0, password: 0, "__v": 0, })

        if (!getUser)
            return res.status(404).send({ status: false, message: "No User Found" })

        return res.status(200).send({ status: true, message: "users list accessed successfully", data: getUser })

    } catch (error: any) {
        return res.status(500).send({ status: false, message: error.message })

    }
}

const getUserStatus = async function (req: Request, res: Response) {

    try {

        let data = req.query

        let { status } = data

        let filter = { ...req.query }

        if (isValid(status as string)) {
            filter["status"] = status
        }

        let getUserDetail = await bookingModel.find(filter).select({ _id: 0, "__v": 0, }).populate('userId', { password: 0, "__v": 0 })

        if (!getUserDetail)
            return res.status(404).send({ status: false, message: "users status not Found" })

        return res.status(200).send({ status: true, message: "users status accessed successfully", data: getUserDetail })


    } catch (error: any) {
        return res.status(500).send({ status: false, message: error.message })

    }
}


export { createSlot, getSlot, getUser, getUserStatus };
