export const hexToRGBA = (hexCode: string, opacity: number): string => {
  let newHexCode = '';

  if (hexCode.charAt(0) === '#') {
    newHexCode = hexCode.substring(1);
  }

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  newHexCode = newHexCode.replace(
    shorthandRegex,
    (_, red: string, green: string, blue: string) => `${red}${red}${green}${green}${blue}${blue}`,
  );

  const red = parseInt(newHexCode.substring(0, 2), 16);
  const green = parseInt(newHexCode.substring(2, 4), 16);
  const blue = parseInt(newHexCode.substring(4, 6), 16);

  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return rgbaColor;
};
