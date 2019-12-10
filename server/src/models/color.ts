import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  hex: {
    required: true,
    type: String,
    unique: true
  },
  hue: {
    required: true,
    type: String
  }
});

export default mongoose.model("Color", colorSchema);
