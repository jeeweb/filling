import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#2B2B2B",
    secondary: "#8A8A8A",
    selected: "#FFFFFF",
    error: "#F77676",
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
  fontFamily: {
    logo: `var(--font-black-han-sans)`,
    common: `var(--font-noto-sans-kr)`,
  },
  fontSize: {
    small: "14px",
    medium: "16px",
    large: "20px",
  },
  fontWeight: {
    normal: "400",
    semiBold: "500",
    bold: "700",
  },
});
