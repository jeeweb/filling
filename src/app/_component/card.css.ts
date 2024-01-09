import { style } from "@vanilla-extract/css";

export const cardList = style({
  display: "flex",
  gap: "8px",
});

export const cardItem = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  width: "400px",
  height: "64vh",
  minHeight: "464px",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
  cursor: "pointer",
});
