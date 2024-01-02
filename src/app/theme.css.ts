import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#2B2B2B",
    secondary: "#8A8A8A",
    selected: "#FFFFFF",
  },
  bgColor: {
    yellow: "#FBE285",
    red: "#F77676",
    green: "#CEE6BB",
    blue: "#BCE7F0",
    gray: "#F6F6F6",
    black: "#252525",
    white: "#FFFFFF",
  },
  font: {
    logo: `var(--font-black-han-sans)`,
    common: `var(--font-noto-sans-kr)`,
  },
});
