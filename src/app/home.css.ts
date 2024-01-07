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

export const btnClose = style({
  position: "absolute",
  right: "18px",
  top: "18px",
  width: "24px",
  height: "24px",
  backgroundImage: "url('/btn-close.png')",
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

export const modalWrap = style({
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "100",
});

export const detailBox = style({
  position: "relative",
  display: "flex",
  width: "80vw",
  minWidth: "800px",
  maxWidth: "920px",
  height: "50vw",
  minHeight: "500px",
  maxHeight: "640px",
  borderRadius: "8px",
  backgroundColor: vars.bgColor.white,
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.4)",
  zIndex: "150",
});

export const cardScrollWrap = style({});
export const contentScrollWrap = style({});

export const scrollWrap = style({
  overflow: "auto",
  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: vars.bgColor.white,
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: vars.bgColor.blue,
    borderRadius: "4px",
  },
  selectors: {
    [`&.${cardScrollWrap}`]: {
      padding: "8vh",
    },
    [`&.${contentScrollWrap}`]: {
      height: "calc(100% - 126px)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a9d9e3",
    },
  },
});

export const cardList = style({
  display: "flex",
  gap: "8px",
});

export const cardItem = style({
  flexShrink: 0,
  width: "400px",
  height: "64vh",
  minHeight: "464px",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
});

export const linkDetail = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const imgBox = style({
  position: "relative",
  overflow: "hidden",
  selectors: {
    [`${cardItem} &`]: {
      height: "80%",
    },
    [`${detailBox} &`]: {
      flex: 1,
      borderRadius: "8px 0 0 8px",
    },
  },
});

export const summaryTextBox = style({
  position: "relative",
  selectors: {
    [`${cardItem} &`]: {
      flex: 1,
      paddingTop: "16px",
    },
    [`${detailBox} &`]: {
      padding: "24px",
      width: "360px",
    },
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

export const drinkInfo = style({
  display: "flex",
  gap: "4px",
});

export const contentTitle = style({
  margin: "8px 0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const contentText = style({
  fontSize: "15px",
  lineHeight: "1.26",
});

export const dayInfo = style({
  selectors: {
    [`${cardItem} &`]: {
      position: "absolute",
      bottom: "0",
      fontSize: "12px",
    },
    [`${detailBox} &`]: {
      marginBottom: "8px",
      fontSize: "14px",
    },
  },
});

export const dayWeather = style({
  marginLeft: "12px",
});

export const moreInfo = style({
  position: "absolute",
  bottom: "24px",
  display: "flex",
  gap: "4px",
});
