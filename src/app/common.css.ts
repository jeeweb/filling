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
  height: "4rem",
  backgroundColor: "#fff",
  boxShadow: "-2px 0px 8px 0px rgba(0,0,0,0.15)",
  zIndex: "100",
});

export const navList = style({
  display: "flex",
  alignItems: "center",
  gap: "0.875em",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "4rem",
  height: "calc(100vh - 4rem)",
  backgroundColor: vars.bgColor.gray,
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 calc(8vw - 0.5em)",
  //width: "100%",
});

export const contentsBox = style({
  position: "relative",
  height: "100%",
  width: "100vw",
  overflow: "hidden",
  backgroundColor: vars.bgColor.white,
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
  padding: "0.5em",
  borderRadius: "1.5em",
  backgroundColor: vars.bgColor.white,
  selectors: {
    [`${noContentsBox} &`]: {
      transform: "translateY(10vh)",
    },
  },
});

export const cardScrollWrap = style({});
export const listScrollWrap = style({});
export const contentScrollWrap = style({});
export const formScrollWrap = style({});

export const scrollWrap = style({
  overflow: "auto",
  padding: "0.5em",
  "::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
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
      marginTop: "3.25em",
      height: "calc(100vh - 6.5em)",
    },
    [`&.${listScrollWrap}`]: {
      marginTop: "3.25em",
      height: "calc(100vh - 6.5em)",
      width: "100%",
    },
    [`&.${contentScrollWrap}`]: {
      height: "calc(100% - 9rem)",
      margin: "0.5em 0",
      padding: "0.5em 0",
    },
    [`&.${formScrollWrap}`]: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      paddingBottom: "1rem",
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
      fontSize: "2.5em",
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
      padding: "1em",
      marginBottom: "0.25em",
      color: vars.color.primary,
      fontSize: vars.fontSize.large,
    },
    [`${formImgRow} &`]: {
      lineHeight: "1.75em",
    },
  },
});

/** Buttons **/
export const btnListStyleWrap = style({
  position: "absolute",
  top: "1rem",
  left: "8vw",
  display: "flex",
  alignItems: "center",
  gap: "0.25em",
});

export const btnSmall = style({});

export const btn = style({
  display: "inline-block",
  padding: "0.5em 0.75em",
  textAlign: "center",
  borderRadius: "1.25em",
  backgroundColor: vars.bgColor.gray,
  transition: "0.2s",
  ":hover": {
    backgroundColor: vars.bgColor.black,
    color: vars.color.selected,
  },
  selectors: {
    [`&.${btnSmall}`]: {
      padding: "0.25em 0.625em",
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
  width: "24px", // 1.5rem
  height: "24px", //1.5rem
  borderRadius: "50%",
  ":hover": {
    backgroundColor: vars.bgColor.gray,
  },
});

export const btnClose = style({
  position: "absolute",
  right: "1.125rem",
  top: "1.125rem",
  backgroundImage: "url('/icon-close.png')",
});

export const btnCalendar = style({
  backgroundImage: "url('/icon-calendar.png')",
});

/** input **/
export const inputGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  //padding: "8px 0",
  borderRadius: "1.25rem",
  backgroundColor: vars.bgColor.white,
  selectors: {
    [`${inputGroup} &`]: {
      flex: 1,
    },
  },
});

export const inputText = style({
  flex: "1",
  padding: "0.5rem",
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
  height: "7.25em",
  padding: "0.375em 0.5em",
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  border: `2px solid ${vars.bgColor.gray}`,
  borderRadius: "0.5em",
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
  paddingLeft: "1.5rem",
  cursor: "pointer",
  "::before": {
    content: "",
    position: "absolute",
    left: 0,
    top: 0,
    width: "20px", //1.25rem
    height: "20px", //1.25rem
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
  lineHeight: "1.25",
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
  padding: "0.375rem 0.5rem",
  width: "7.5rem",
  color: vars.color.primary,
  fontFamily: vars.fontFamily.common,
  border: `2px solid ${vars.bgColor.gray}`,
  borderRadius: "0.5rem",
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
  gap: "0.5rem",
  flexWrap: "wrap", // 가로스크롤구현 전 임시로 적용
});

export const boardList = style({
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
});

export const postItem = style({
  flexShrink: 0,
  display: "flex",
  gap: "0.75rem",
  padding: "1rem",
  borderRadius: "0.75rem",
  backgroundColor: vars.bgColor.white,
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
  cursor: "pointer",
  selectors: {
    [`${cardList} &`]: {
      flexDirection: "column",
      width: "25rem",
      height: "64vh",
      minHeight: "464px",
    },
    [`${boardList} &`]: {
      width: "100%",
      height: "7.75rem",
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
  top: "-4rem",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: "200",
});

export const modalError = style({
  position: "absolute",
  top: "4rem",
  left: "0",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "calc(100% - 4rem)",
  paddingTop: "10%",
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
  //color: vars.color.secondary,
  fontSize: vars.fontSize.large,
});
