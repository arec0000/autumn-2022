import News from './model.js'
import checkAccess from '../helpers/checkAccess.js'

export const createNews = async (req, res) => {
    const token = req.headers.authorization
    try {
        const role = await checkAccess(token)
        if (role != 'admin') {
            return res.status(403).json({
                error: 'У вас нет доступа'
            })
        }
        const news = new News(req.body)
        news.save()
        console.log('Новость успешно создана')
        res.json('Новость успешно создана')
    } catch (e) {
        res.json(e.message)
        console.log('Ошибка при создании новости')
        console.error(e)
    }
}

export const updateNews = (req, res) => {

}

export const getNews = async (req, res) => {
    const news = await News.find({})
    res.json(news)
}
