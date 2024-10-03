// only functions are written here
// export and import
import { booking } from "../models/booking-model.js";

export const getAllBooking = (req, res) => {
res.status(200).json('These are all the bookings')
};

export const getOneBooking = (req, res) => {
    res.json('This is one booking')
};

export const postOneBooking = async(req, res) => {

     //creates a new instance of your model 
     const newBooking = new booking(req.body) //booking from models, already imported at the top
 //booking from models, already imported at the top
 
     // saves the data to the database and is a Mongoose method to persist/save the data.
     const bookings = await newBooking.save()
 
     res.status(201).json(bookings)
}

// update booking
export const updateOneBooking = async (req, res, next) => {
    res.json('This booking is updated')
}

export const deleteOneBooking = (req, res, next) => {
    res.json('This booking is deleted')
}




