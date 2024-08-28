import express from 'express'

const answers = express.Router()

answers.get('/', (request, response) => {
    response.send('Hey this is working')
})

export default answers

