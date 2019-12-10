import mongoose from 'mongoose'

const colorSchema = new mongoose.Schema({
  hex: {
    type: String,
    unique: true,
    required: true
  },
  hue: {
    type: String,
    required: true
  }
})

export default mongoose.model('Color', colorSchema)
