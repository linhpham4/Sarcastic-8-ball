import express from "express";
import answers from "./routes/answers.js"
const app = express()

import cors from 'cors'
import "dotenv/config";
const PORT = process.env.PORT || 8081

//Allow for all domains to access page
app.use(cors())

// Middleware that allows for JSON data to pass through 
app.use(express.json())

//Routes
app.use('/answers', answers)

//Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})