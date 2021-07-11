import { Colors } from "./types";

export const baseColors = {
  failure: "#FFFFFF",
  primary: "#FFFFFF",
  primaryBright: "#FFFFFF",
  primaryDark: "#FFFFFF",
  secondary: "#FFFFFF",
  success: "#FFFFFF",
  warning: "#FFFFFF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "linear-gradient(45deg, #945C28 0%, #51291e 100%)",
  textDisabled: "#BDC2C4",
  textSubtle: "#273b4f",
  borderColor: "#E9EAEB",
  card: "#EDF4ED",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#51c4d3",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#EDF4ED",
  tertiary: "#353547",
  text: "#273b4f",
  textDisabled: "#BDC2C4",
  textSubtle: "#273b4f",
  borderColor: "#524B63",
  card: "#EDF4ED",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};