import express from 'express'
import { getRole, auth, register, getUserData, createUser, getAllUsers, deleteUser } from './controller.js'

const userRouter = express.Router()

userRouter.get('/my-role', getRole)
userRouter.post('/auth', auth)
userRouter.post('/register', register)
userRouter.get('/user-data', getUserData)

userRouter.post('/create-user', createUser)
userRouter.delete('/user', deleteUser)
userRouter.get('/users', getAllUsers)

export default userRouter
