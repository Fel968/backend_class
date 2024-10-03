// const app is done in index file and doesn't need to be declared here or anywhere again
// import express from 'express'
import { Router } from 'express'
import { getAllBooking, getOneBooking, postOneBooking, updateOneBooking, deleteOneBooking} from '../controllers/booking-controller.js'
// import { getOneBooking } from '../controllers/booking-controller.js';

export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBooking)

bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/bookings', postOneBooking)

bookingRouter.patch('/bookings/:id', updateOneBooking)

bookingRouter.delete('/bookings/:id', deleteOneBooking)

