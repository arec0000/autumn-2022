import jwt from 'jsonwebtoken'
import { secret } from '../config.js'
import User from '../user/model.js'

const checkAccess = async token => {
    const {id} = jwt.verify(token, secret)
    const user = await User.findById(id)
    return user?.role
}

export default checkAccess
