import Color from '../models/color'

const colors = async () => {
  const colors = await Color.find()
  return { colors }
}

export default colors
