import { style } from "@vanilla-extract/css";

export const common = style({});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 120px",
  height: "60px",
});

export const navList = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});
