import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { secret } from '../config.js'
import User from './model.js'

const generateAccessToken = id => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

const checkAccess = async token => {
    const {id} = jwt.verify(token, secret)
    const user = await User.findById(id)
    return user?.role
}

export const getRole = async (req, res) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(403).json({
            error: 'Пользователь не авторизован'
        })
    }
    const role = checkAccess(token)
    if (!role) {
        return res.status(403).json({
            error: 'Пользователя с таким id не существует'
        })
    }
    res.json({role})
}

export const auth = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
        return res.status(400).json({
            error: 'Такого пользователя не существует'
        })
    }
    const validingPassword = bcrypt.compareSync(password, user.password)
    if (!validingPassword) {
        return res.status(400).json({
            error: 'Неверный пароль'
        })
    }
    console.log('Авторизация прошла успешно')
    res.json({
        title: 'Авторизация прошла успешно',
        token: generateAccessToken(user._id),
        role: user.role
    })
}

export const register = async (req, res) => {
    const {token, email, password} = req.body
    const user = await User.findById(token)
    if (user.email && user.password) {
        return res.status(400).json({
            error: 'Данный пользователь уже зарегестрирован'
        })
    }
    const candidate = await User.findOne({email})
    if (candidate) {
        return res.status(400).json({
            error: 'Пользователь с таким email уже зарегестрирован'
        })
    }
    user.email = email
    user.password = bcrypt.hashSync(password, 7)
    await user.save().then(result => {
        console.log('Регистрация прошла успешно')
        res.json({
            title: 'Регистрация прошла успешно',
            token: generateAccessToken(result._id),
            role: user.role
        })
    })
}

export const createUser = async (req, res) => {
    // верификация пока отключена, чтобы можно было содать первого администратора
    // const token = req.headers.authorization
    try {
        // const role = await checkAccess(token)
        // if (role != 'admin') {
            // return res.status(403).json({
                // error: 'У вас нет доступа'
            // })
        // }
        const user = new User(req.body)
        await user.save()
        console.log('Пользователь создан')
        res.json('Пользователь успешно создан')
    } catch (e) {
        res.json(e.message)
        console.log('Ошибка при создании пользователя')
        console.error(e)
    }
}

export const getAllUsers = async (req, res) => {
    const token = req.headers.authorization
    try {
        const role = await checkAccess(token)
        if (role != 'admin') {
            return res.status(403).json({
                error: 'У вас нет доступа'
            })
        }
        const users = await User.find({})
        res.json(users)
    } catch (e) {
        res.json(e.message)
        console.log('Ошибка при создании пользователя')
        console.error(e)
    }
}
