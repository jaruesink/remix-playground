export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16
      )}`
    : ``;
};

export const generateCSSVariablesInnerHTML = ({
  primary_theme_colors,
}: {
  primary_theme_colors: Record<string, string>;
}) => {
  let cssVarsString = '';
  if (primary_theme_colors) {
    cssVarsString = ['primary'].reduce((cssVarsStringAcc, colorTypeCurr) => {
      const colorObjects: Record<string, any> = {
        primary: primary_theme_colors,
      };

      const colorVariables = Object.entries<string>(
        colorObjects[colorTypeCurr]
      ).reduce((acc, [colorKey, colorValue]) => {
        return (acc += `--color-${colorTypeCurr}-${colorKey.replace(
          'color_',
          ''
        )}: ${hexToRgb(colorValue)};`);
      }, '');
      return (cssVarsStringAcc += colorVariables);
    }, '');
  }

  return `:root {${cssVarsString}}`;
};
