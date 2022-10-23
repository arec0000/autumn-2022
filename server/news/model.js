import mongoose from 'mongoose'

const News = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String}
})

export default mongoose.model('News', News)
