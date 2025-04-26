require('dotenv').config()
const express = require('express')
const cors = require('cors')
const UserRouter = require('./routers/userRouter')
const ProductRouter = require('./routers/productRouter')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors({ origin : '*' }))
app.use(express.json()) // Middleware to parse JSON request body
app.use('/user', UserRouter)
app.use('/product', ProductRouter)

app.get('/', (req, res) => {
    res.send('Response from express')
})

app.get('/add', (req, res) => {
    res.send('response from express add')
})

app.listen(port, () => {
    console.log("Response from server");
})


