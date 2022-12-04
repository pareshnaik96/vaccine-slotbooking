import express from "express";
import serverless from 'serverless-http';
import { bookSlot, updateBooking } from "./Controllers/bookingController";
import { authentication, authorization } from './Middlewares/auth'
import mongoose from 'mongoose';
import bodyParser from "body-parser";


const app = express()

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://pareshnaik:pareshruno@cluster0.pithhzr.mongodb.net/Vaccine-DB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDb is connected"))
  .catch(err => console.log(err))


app.post('/booking/:userId', authentication, authorization, bookSlot)

app.put('/booking/:userId', authentication, authorization, updateBooking) //user cancelled the booking slot only


export const main = serverless(app);
