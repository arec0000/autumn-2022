import mongoose from 'mongoose'

const Letter = mongoose.Schema({
    title: {type: String, required: true},
    name: {type: String, required: true}
})

export default mongoose.model('Letter', Letter)
