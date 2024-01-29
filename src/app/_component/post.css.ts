import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";
import { cardList, boardList, postItem } from "@/app/common.css";

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

export const summaryTextBox = style({
  position: "relative",
  selectors: {
    [`${postItem} &`]: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    [`${detailBox} &`]: {
      padding: "1.5rem",
      width: "360px",
    },
  },
});

export const imgBox = style({
  position: "relative",
  overflow: "hidden",
  selectors: {
    [`${cardList} &`]: {
      height: "78%",
    },
    [`${boardList} &`]: {
      width: "5.75rem",
      height: "100%",
    },
    [`${detailBox} &`]: {
      flex: 1,
      borderRadius: "0.5rem 0 0 0.5rem",
    },
  },
});

export const tagList = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  width: "100%",
  overflow: "hidden",
});

export const tagItem = style({
  padding: "0.3em 0.8em",
  fontSize: vars.fontSize.small,
  backgroundColor: vars.bgColor.yellow,
  borderRadius: "1em",
});

export const drinkTag = style({
  backgroundColor: vars.bgColor.red,
});

export const drinkInfo = style({
  display: "flex",
  gap: "0.25rem",
  fontSize: vars.fontSize.small,
  selectors: {
    [`${detailBox} &`]: {
      fontSize: vars.fontSize.medium,
      margin: "0.8rem 0",
    },
  },
});

export const contentTitle = style({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: vars.fontSize.large,
  fontWeight: vars.fontWeight.semiBold,
});

export const contentText = style({
  fontSize: vars.fontSize.medium,
  lineHeight: "1.26",
});

export const dayInfo = style({
  selectors: {
    [`${postItem} &`]: {
      fontSize: vars.fontSize.small,
    },
    [`${detailBox} &`]: {
      marginBottom: "0.5rem",
      fontSize: vars.fontSize.medium,
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
