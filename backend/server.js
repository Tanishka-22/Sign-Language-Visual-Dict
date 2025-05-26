require('dotenv').config()
const express = require('express')
const wordRoutes = require('./routes/words');
const mongoose = require('mongoose')
const cors = require("cors");

const app = express()
const uri = process.env.MONGO_URI
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/words', wordRoutes);

app.get('/', (req, res) => {
    res.json({mssg:'Hello World'})
})

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to DB & Server is running on http://localhost:3000')
})
})
.catch((error) => {
    console.log(error)
})

