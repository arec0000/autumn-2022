import jwt from 'jsonwebtoken'
import { secret } from '../config.js'
import User from '../user/model.js'
import Letter from './model'


export const sendLetter = async (req, res) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(403).json({
            error: 'Пользователь не авторизован'
        })
    }
    const {id} = jwt.verify(token, secret)
    const user = await User.findById(id)
    const letter = new Letter({
        text: req.body,
        author: user.FCs
    })
    letter.save()
    res.json('Обращение отправлено')
    console.log('Обращение отправлено')
    console.log(letter)
}

export const getLetters = (req, res) => {

}
