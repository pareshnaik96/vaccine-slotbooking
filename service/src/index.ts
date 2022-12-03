import { IUser } from "./models";
import { ISlot } from "./models";
import { IBooking } from "./models"

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://pareshnaik:pareshruno@cluster0.pithhzr.mongodb.net/Vaccine-DB?retryWrites=true&w=majority")
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



export { app, IUser, ISlot, IBooking }