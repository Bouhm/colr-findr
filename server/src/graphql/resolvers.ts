import Color from '../models/color'

const Query = {
  colors: async () => {
    const colors = await Color.find()
    return colors
  }
}

export default Query
