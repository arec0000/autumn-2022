import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './user/routes.js'
import newsRouter from './news/routes.js'
import letterRouter from './letterToRector/routes.js'

const PORT = process.env.PORT || 5000

const app = express()

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: 'root',
    pass: 'test-pass'
}

mongoose.connect('mongodb://grtsk:27017/database?authSource=admin', options)
    .then(() => {
        console.log('connected to mongodb')
        app.listen(PORT, err => err ? console.log(err) : console.log(`Server started on port ${PORT}`))

        app.use(express.urlencoded({extended: false}))
        app.use(express.json())
        app.use(cors())
        app.use('/', userRouter)
        app.use('/', newsRouter)
        app.use('/', letterRouter)
    })
