import express from 'express'
import { bookingRouter } from './routes/all-routes.js'
import mongoose from 'mongoose'
// what's this for? oh yeah for the .env file
import 'dotenv/config'

await mongoose.connect(process.env.MONGO_URI)//is there a problem here

const app = express()

const PORT = 8080

// for taking input
app.use(express.json())

// use everything in the all-route
app.use(bookingRouter)

app.listen(PORT, () =>
     console.log ('Server is listening'))

