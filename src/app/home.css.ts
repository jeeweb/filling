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
  display: "none",
  // display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  width: "100%",
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

export const contentsBox = style({
  height: "100%",
  width: "100vw",
  overflow: "hidden",
});

export const cardScrollWrap = style({});

export const scrollWrap = style({
  overflow: "auto",
  selectors: {
    [`&.${cardScrollWrap}`]: {
      padding: "8vh",
    },
  },
});

export const cardList = style({
  display: "flex",
  gap: "8px",
});

export const cardItem = style({
  flexShrink: "0",
  display: "flex",
  flexDirection: "column",
  width: "400px",
  height: "64vh",
  minHeight: "464px",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "-2px 0px 8px 0px rgba(0,0,0,0.15)",
});

export const imgBox = style({
  position: "relative",
  height: "80%",
  overflow: "hidden",
  selectors: {
    [`${cardItem} &`]: {},
  },
});

export const summaryTextBox = style({
  position: "relative",
  flex: "1",
  paddingTop: "16px",
  selectors: {
    [`${cardItem} &`]: {},
  },
});

export const tagList = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  width: "100%",
  marginBottom: "12px",
  overflow: "hidden",
});
export const tagItem = style({
  padding: "4px 12px",
  fontSize: "12px",
  backgroundColor: vars.bgColor.yellow,
  borderRadius: "10px",
});

export const drinkTag = style({
  backgroundColor: vars.bgColor.red,
});

export const dayInfo = style({
  selectors: {
    [`${cardItem} &`]: {
      position: "absolute",
      bottom: "0",
      fontSize: "12px",
    },
  },
});

export const dayWeather = style({
  marginLeft: "12px",
});
