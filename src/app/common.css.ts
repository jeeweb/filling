import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { formImgRow } from "./post/postForm.css";

export const common = style({
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  fontSize: vars.fontSize.medium,
});

/**** layout ****/
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "60px",
  height: "calc(100vh - 60px)",
  backgroundColor: vars.bgColor.gray,
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 8vw",
});

export const noContentsBox = style({
  display: "flex",
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

export const contentsBox = style({
  position: "relative",
  height: "100%",
  width: "100vw",
  overflow: "hidden",
});

export const cardScrollWrap = style({});
export const listScrollWrap = style({});
export const contentScrollWrap = style({});
export const formScrollWrap = style({});

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
      marginTop: "52px",
      height: "calc(100% - 52px)",
    },
    [`&.${listScrollWrap}`]: {
      marginTop: "52px",
      height: "calc(100% - 52px)",
      width: "100%",
    },
    [`&.${contentScrollWrap}`]: {
      height: "calc(100% - 126px)",
    },
    [`&.${formScrollWrap}`]: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      paddingBottom: "16px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a9d9e3",
    },
  },
});

/**** Elements ****/
export const logo = style({
  fontFamily: vars.fontFamily.logo,
  fontWeight: "normal",
  selectors: {
    [`${header} &`]: {
      fontSize: "40px",
    },
  },
});

export const loadingSpinner = style({
  position: "absolute",
  top: "40vh",
  left: "0",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
});

export const infoText = style({
  color: vars.color.secondary,
  fontSize: vars.fontSize.small,
  selectors: {
    [`${controlWrap} &`]: {
      padding: "16px",
      marginBottom: "4px",
      color: vars.color.primary,
      fontSize: vars.fontSize.large,
    },
    [`${formImgRow} &`]: {
      lineHeight: "28px",
    },
  },
});

/** Buttons **/
export const btnListStyleWrap = style({
  position: "absolute",
  top: "12px",
  left: "8vw",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const btnSmall = style({});

export const btn = style({
  display: "inline-block",
  padding: "8px 12px",
  textAlign: "center",
  borderRadius: "20px",
  backgroundColor: vars.bgColor.gray,
  transition: "0.2s",
  ":hover": {
    backgroundColor: vars.bgColor.black,
    color: vars.color.selected,
  },
  selectors: {
    [`&.${btnSmall}`]: {
      padding: "4px 10px",
      fontSize: vars.fontSize.small,
    },
  },
});

export const btnSubmit = style({
  backgroundColor: vars.bgColor.blue,
});

export const btnActive = style({
  backgroundColor: vars.bgColor.black,
  color: vars.color.selected,
});

export const btnIcon = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  ":hover": {
    backgroundColor: vars.bgColor.gray,
  },
});

export const btnClose = style({
  position: "absolute",
  right: "18px",
  top: "18px",
  backgroundImage: "url('/icon-close.png')",
});

export const btnCalendar = style({
  backgroundImage: "url('/icon-calendar.png')",
});

/** input **/
export const inputGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  //padding: "8px 0",
  borderRadius: "20px",
  backgroundColor: vars.bgColor.white,
  selectors: {
    [`${inputGroup} &`]: {
      flex: 1,
    },
  },
});

export const inputText = style({
  flex: "1",
  padding: "8px",
  borderBottom: `2px solid ${vars.bgColor.gray}`,
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  transition: "0.3s",
  ":focus": {
    borderColor: vars.bgColor.green,
  },
  "::placeholder": {
    opacity: 0.6,
    color: vars.color.secondary,
    fontFamily: vars.fontFamily.common,
    fontSize: vars.fontSize.small,
  },
});

export const textarea = style({
  width: "100%",
  height: "116px",
  padding: "6px 8px",
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  border: `2px solid ${vars.bgColor.gray}`,
  borderRadius: "8px",
  backgroundColor: "transparent",
  transition: "0.3s",
  resize: "none",
  ":focus": {
    outline: "none",
    borderColor: vars.bgColor.green,
  },
  "::placeholder": {
    opacity: 0.6,
    color: vars.color.secondary,
    fontFamily: vars.fontFamily.common,
    fontSize: vars.fontSize.small,
  },
});

export const checkBox = style({
  position: "relative",
});

export const inputCheck = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  overflow: "hidden",
  border: 0,
});

export const inputCheckLabel = style({
  display: "inline-block",
  position: "relative",
  paddingLeft: "24px",
  cursor: "pointer",
  "::before": {
    content: "",
    position: "absolute",
    left: 0,
    top: 0,
    width: "20px",
    height: "20px",
    background: "url('/icon-checkbox.png') center / contain no-repeat",
  },
  selectors: {
    [`${inputCheck}:checked + &::before`]: {
      backgroundImage: "url('/icon-checkbox-checked.png')",
    },
  },
});

export const inputCheckLabelText = style({
  fontSize: vars.fontSize.small,
  lineHeight: "20px",
  selectors: {
    [`${inputCheck}:checked + ${inputCheckLabel} &`]: {
      fontWeight: vars.fontWeight.bold,
    },
  },
});

export const selectBox = style({
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
  padding: "6px 8px",
  width: "120px",
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  border: `2px solid ${vars.bgColor.gray}`,
  borderRadius: "8px",
  transition: "0.3s",
  background: "url('/icon-arrow-down.png') 92% center no-repeat",
  backgroundSize: "18%",
  ":focus": {
    outline: "none",
    borderColor: vars.bgColor.green,
  },
});

/** PostList **/
export const cardList = style({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap", // 가로스크롤구현 전 임시로 적용
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
  backgroundColor: vars.bgColor.white,
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

export const observer = style({
  display: "flex",
  justifyContent: "center",
  padding: "12px 0",
  width: "100%",
  fontSize: "36px",
});

/** Modal **/
export const modalWrap = style({
  position: "absolute",
  top: "-60px",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.8)",
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
  fontSize: vars.fontSize.large,
});
