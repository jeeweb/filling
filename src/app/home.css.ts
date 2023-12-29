import { style } from "@vanilla-extract/css";

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "1000px",
});

export const noContentsBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-60px",
  marginBottom: "24px",
  height: "500px",
  width: "800px",
  backgroundColor: "#ddd",
  textAlign: "center",
  borderRadius: "24px",
  opacity: "0.4",
});

export const btnWrite = style({
  width: "800px",
  height: "48px",
  lineHeight: "48px",
  textAlign: "center",
  backgroundColor: "#86B6F6",
  color: "#fff",
  borderRadius: "8px",
  selectors: {
    "&:hover": {
      backgroundColor: "#619ded",
    },
  },
});
