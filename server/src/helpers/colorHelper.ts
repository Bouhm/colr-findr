import ntc from "../lib/ntc";
ntc.init();

// Maps hues (the color groups) to associated color shades
export const huesMap: any = {
  blue: ["blue"],
  brown: ["brown"],
  gray: ["gray", "grey", "black", "white"],
  green: ["green"],
  orange: ["orange"],
  purple: ["purple", "violet"],
  red: ["red"],
  yellow: ["yellow"]
};

// Return hue for the given color hexcode
export const getHueForColorHex = (color: string) => {
  const shade = ntc.name(color)[3] as string;
  return getHueForShade(shade);
};

export const getHueForShade = (shade: string) => {
  shade = shade.toLowerCase();
  const hues = Object.keys(huesMap);

  // Get associated color group
  const hue = hues.includes(shade)
    ? shade
    : hues.find((key) => huesMap[key].includes(shade));

  return hue;
};
