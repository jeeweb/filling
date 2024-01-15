import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const common = style({
  color: vars.color.primary,
  fontFamily: vars.font.common,
});

export const loadingSpinner = style({
  position: "absolute",
  top: "40vh",
  left: "0",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
});

export const header = style({
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8vw",
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
  position: "relative",
  top: "60px",
  height: "calc(100vh - 60px)",
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

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "1000px",
});

export const tempShow = style({});

export const noContentsBox = style({
  display: "none", // 임시
  // display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: vars.bgColor.gray,
  textAlign: "center",
  // 임시
  selectors: {
    [`&.${tempShow}`]: {
      display: "flex",
    },
  },
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

export const contentsBox = style({
  position: "relative",
  height: "100%",
  width: "100vw",
  overflow: "hidden",
});

export const btnListStyleWrap = style({
  position: "absolute",
  top: "12px",
  left: "8vw",
  display: "flex",
  alignItems: "center",
  gap: "4px",
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
      padding: "0 8vw",
      marginTop: "52px",
      height: "calc(100% - 52px)",
    },
    [`&.${contentScrollWrap}`]: {
      height: "calc(100% - 126px)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a9d9e3",
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

/** Buttons **/
export const btnListStyle = style({
  display: "inline-block",
  padding: "4px 8px",
  textAlign: "center",
  borderRadius: "16px",
  backgroundColor: vars.bgColor.gray,
  fontSize: "14px",
  transition: "0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: vars.bgColor.black,
      color: vars.color.selected,
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

/** PostList **/
export const cardList = style({
  display: "flex",
  gap: "8px",
});

export const boardList = style({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
});

export const postItem = style({
  flexShrink: 0,
  display: "flex",
  gap: "16px",
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
  cursor: "pointer",
  selectors: {
    [`${cardList} &`]: {
      flexDirection: "column",
      width: "400px",
      height: "64vh",
      minHeight: "464px",
    },
    [`${boardList} &`]: {
      width: "100%",
      height: "124px",
    },
  },
});

export const btnActive = style({
  backgroundColor: vars.bgColor.black,
  color: vars.color.selected,
});

/** Modal **/
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

export const modalError = style({
  position: "absolute",
  top: "60px",
  left: "0",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "calc(100% - 60px)",
  paddingTop: "10%",
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
  //color: vars.color.secondary,
  fontSize: "20px",
});
