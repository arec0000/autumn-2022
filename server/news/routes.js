import express from 'express'
import { createNews, updateNews, getNews } from './controller.js'

const newsRouter = express.Router()

newsRouter.get('/news', getNews)
newsRouter.post('/news', createNews)
newsRouter.put('/news', updateNews)

export default newsRouter
