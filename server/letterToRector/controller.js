import jwt from 'jsonwebtoken'
import { secret } from '../config.js'
import User from '../user/model.js'
import Letter from './model.js'

const checkAccess = async token => {
    const {id} = jwt.verify(token, secret)
    const user = await User.findById(id)
    return user?.role
}

export const createLetter = async (req, res) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(403).json({
            error: 'Пользователь не авторизован'
        })
    }
    const {id} = jwt.verify(token, secret)
    const user = await User.findById(id)
    const letter = new Letter({
        text: req.body.text,
        author: user.FCs
    })
    letter.save()
    res.json('Обращение отправлено')
    console.log('Обращение отправлено')
    console.log(letter)
}

export const getLetters = async (req, res) => {
    const token = req.headers.authorization
    try {
        const role = await checkAccess(token)
        if (role != 'admin') {
            return res.status(403).json({
                error: 'У вас нет доступа'
            })
        }
        const data = await Letter.find({})
        res.json(data)
    } catch (e) {
        res.json(e.message)
        console.log('Ошибка при получении обращений')
        console.error(e)
    }
}
