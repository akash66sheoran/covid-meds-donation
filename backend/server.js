const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDatabase = require('./database')

dotenv.config()

connectDatabase()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route imports
const medicineRoute = require('./routes/medicineRoutes')
const orderRoute = require('./routes/orderRoutes')
app.use(medicineRoute)
app.use(orderRoute)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})