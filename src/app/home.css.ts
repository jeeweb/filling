import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

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
  height: "100%",
  width: "100%",
  paddingTop: "36px",
  backgroundColor: vars.bgColor.gray,
  textAlign: "center",
});

export const controlWrap = style({
  padding: "8px",
  borderRadius: "24px",
  backgroundColor: vars.bgColor.white,
  selectors: {
    [`${noContentsBox} &`]: {
      transform: "translateY(10vh)",
    },
  },
});

export const btnWrite = style({
  display: "inline-block",
  padding: "8px 12px",
  textAlign: "center",
  borderRadius: "16px",
  backgroundColor: vars.bgColor.gray,
  transition: "0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.bgColor.black,
      color: vars.color.selected,
    },
  },
});

export const infoText = style({
  selectors: {
    [`${controlWrap} &`]: {
      padding: "16px",
      marginBottom: "4px",
      fontSize: "20px",
    },
  },
});
