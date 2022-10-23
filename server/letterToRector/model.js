import mongoose from 'mongoose'

const Letter = mongoose.Schema({
    text: {type: String, required: true},
    author: {type: String, required: true}
})

export default mongoose.model('Letter', Letter)
