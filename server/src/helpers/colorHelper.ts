import * as ntc from '../lib/ntc'
ntc.init()

// Maps hues (the color groups) to associated color shades
const huesMap = {
  red: ['red'],
  orange: ['orange'],
  yellow: ['yellow'],
  green: ['green'],
  blue: ['blue'],
  purple: ['purple', 'violet'],
  brown: ['brown'],
  gray: ['gray', 'grey', 'black', 'white']
}

// Return hue for the given color hexcode
const getHueForColorHex = color => {
  const shade = ntc.name(color)[3]
  return getHueForShade(shade)
}

const getHueForShade = shade => {
  shade = shade.toLowerCase()
  const hues = Object.keys(huesMap)

  // Get associated color group
  const hue = hues.includes(shade)
    ? shade
    : hues.find(key => huesMap[key].includes(shade))

  return hue
}

module.exports = { huesMap, getHueForColorHex, getHueForShade }
