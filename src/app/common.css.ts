import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const common = style({
  color: vars.color.primary,
  fontFamily: vars.font.common,
});

export const header = style({
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 120px",
  width: "100vw",
  height: "60px",
  backgroundColor: "#fff",
  boxShadow: "-2px 0px 8px 0px rgba(0,0,0,0.15)",
});

export const navList = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  paddingTop: "60px",
});

export const logo = style({
  fontFamily: vars.font.logo,
  fontWeight: "normal",
  selectors: {
    [`${header} &`]: {
      fontSize: "40px",
    },
  },
});
