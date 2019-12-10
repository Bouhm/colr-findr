import mongoose from 'mongoose';

import { getHueForShade } from '../helpers/colorHelper';
import ntc from '../lib/ntc';
import Color from '../models/color';

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-v8yjs.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(URI, { useNewUrlParser: true });

// Name That Color (NTC) provides a list of named colors and approximate hues
// names contains a list of colors in the following format:
// ["17462E", "Zuccini", "Green"] with the hexcode, name, and shade, respectively
mongoose.connection.once('open', () => {
  const count = 200; // Limit to 200 colors
  const colors = [];

  for (let i = 0; i < count; i++) {
    colors.push({
      hex: ntc.names[i][0],
      hue: getHueForShade(ntc.names[i][2])
    });
  }

  Color.insertMany(colors).then(() => mongoose.disconnect());
});
