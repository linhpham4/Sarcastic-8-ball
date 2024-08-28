import express from "express";
import answers from "./routes/answers.js"
const app = express()

import cors from 'cors'

//Allow for all domains to access page
app.use(cors())

// Middleware that allows for JSON data to pass through 
app.use(express.json())

//Routes
app.use('/answers', answers)

//Listen
app.listen(8080, () => {
    console.log("listening")
})