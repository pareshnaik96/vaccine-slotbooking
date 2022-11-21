import express from "express";
const router = express.Router();

import { createUser, login } from "../Controllers/userController";
import { createSlot, getSlot } from "../Controllers/slotController";
import { bookSlot, updateBooking } from "../Controllers/bookingController";

import { authentication, authorization } from "../Middlewares/auth";



router.post('/register', createUser)

router.post('/login', login)

router.post('/slot/:adminId', createSlot)       //only admin can create slot

router.get('/slot', authentication, getSlot)     //Login user can see the slot

router.post('/booking/:userId', authentication, authorization, bookSlot)

router.put('/booking/:userId', authentication, authorization, updateBooking) //user cancelled the booking slot only



export default router;