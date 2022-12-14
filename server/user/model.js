import mongoose from 'mongoose'

const User = mongoose.Schema({
    img: {type: String},
    FCs: {type: String, required: true},
    birthdate: {type: Number},
    role: {type: String, required: true},
    course: {type: Number},
    group: {type: String},
    email: {type: String, required: true},
    password: {type: String}
})

export default mongoose.model('User', User)
