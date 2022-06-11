const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDatabase = require('./database')

dotenv.config()

connectDatabase()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route imports
const requestRoute = require('./routes/requestRoutes')
app.use(requestRoute)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})