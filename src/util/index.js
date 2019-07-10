// eslint-disable-next-line import/prefer-default-export
export const mapNumber = (
  value,
  {
    inMin = 0, inMax = 100, outMin = -1, outMax = 1,
  } = {},
) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
