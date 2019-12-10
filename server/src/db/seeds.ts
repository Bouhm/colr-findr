import mongoose from 'mongoose'

import Color from '../models/color'
import * as colorHelper from '../helpers/colorHelper'
import * as ntc from '../lib/ntc'

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-v8yjs.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

mongoose.connect(URI, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  // Name That Color (NTC) provides a list of named colors and approximate hues
  // names contains a list of colors in the following format:
  // ["17462E", "Zuccini", "Green"] with the hexcode, name, and shade, respectively
  Color.insertMany(
    ntc.names.map(colorData => ({
      hex: colorData[0],
      hue: colorHelper.getHueForShade(colorData[2])
    }))
  ).then(() => mongoose.disconnect())
})
