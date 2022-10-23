import express from 'express'
import { sendLetter, getLetters } from './controller.js'

const letterRouter = express.Router()

letterRouter.get('/rector', getLetters)
letterRouter.post('/rector', sendLetter)

export default letterRouter
