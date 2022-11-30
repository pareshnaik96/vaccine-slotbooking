import userModel from '../src/Models/userModel'
import slotModel from '../src/Models/slotModel'
import bookingModel from '../src/Models/bookingModel'
import ISlot from '../src/Models/slotModel'


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import route from './Routes/route';


const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://pareshnaik:pareshruno@cluster0.pithhzr.mongodb.net/Vaccine-DB?retryWrites=true&w=majority")
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



export { app, userModel, slotModel, bookingModel, ISlot }