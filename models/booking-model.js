import {Schema, model} from "mongoose";

// create schema 
// Schema is a class from mongoose
const bookingSchema = new Schema({
   
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    }, 

    sex: {
        type: String ,
        enum: {values: ['male', 'female']},
        // required: true
    },

    seatNumber: {
        type: Number,
        unique: true,
        // required: true
    },

    email: {
        type: String,
        unique: true,
        // required: true
    }
})

// create and export model
//mongoose>model. model(modelname, schema)
export const booking = model('Booking', bookingSchema)