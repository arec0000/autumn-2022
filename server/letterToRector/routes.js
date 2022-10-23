import express from 'express'
import { createLetter, getLetters } from './controller.js'

const letterRouter = express.Router()

letterRouter.get('/rector', getLetters)
letterRouter.post('/rector', createLetter)

export default letterRouter
