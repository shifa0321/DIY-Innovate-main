require('dotenv').config()
const express = require('express')
const UserRouter = require('./routers/userRouter')

const app = express()
const port = process.env.PORT || 5000;

app.use('/user', UserRouter)

app.get('/', (req, res) => {
    res.send('Response from express')
})

app.listen(port, () => {
    console.log("Response from server");
})


