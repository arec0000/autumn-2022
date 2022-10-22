import express from 'express'
import { getRole, auth, register, createUser, getAllUsers } from './controller.js'

const userRouter = express.Router()

userRouter.get('/my-role', getRole)
userRouter.post('/auth', auth)
userRouter.post('/register', register)

userRouter.post('/create-user', createUser)
userRouter.get('/users', getAllUsers)

export default userRouter
