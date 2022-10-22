import express from 'express'
import { getRole, auth, register, createUser } from './controller.js'

const userRouter = express.Router()

userRouter.get('/my-role', getRole)
userRouter.post('/auth', auth)
userRouter.post('/register', register)
userRouter.post('/create-user', createUser)

export default userRouter
