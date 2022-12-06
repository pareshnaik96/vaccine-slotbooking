import express from "express";
import serverless from 'serverless-http';
import { createSlot, getSlot, getUser, getUserStatus } from "./Controllers/slotController";
import { authentication, adminAuthorization } from './Middlewares/auth'
import mongoose from 'mongoose';
import bodyParser from "body-parser";


const app = express()

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://pareshnaik:pareshruno@cluster0.pithhzr.mongodb.net/Vaccine-DB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDb is connected"))
  .catch(err => console.log(err))


app.post('/slot/:adminId', adminAuthorization, createSlot)       //only admin can create slot

app.get('/slot', authentication, getSlot)

app.get('/user/:adminId', adminAuthorization, getUser)           //only user can access the data

app.get('/user/admin/:adminId', adminAuthorization, getUserStatus)           //only user can access the data


export const main = serverless(app);
