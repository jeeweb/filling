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
      padding: "24px",
      width: "360px",
    },
  },
});

export const imgBox = style({
  position: "relative",
  overflow: "hidden",
  selectors: {
    [`${cardList} &`]: {
      height: "80%",
    },
    [`${boardList} &`]: {
      width: "92px",
      height: "100%",
    },
    [`${detailBox} &`]: {
      flex: 1,
      borderRadius: "8px 0 0 8px",
    },
  },
});

export const tagList = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  width: "100%",
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
  fontSize: "12px",
  [`${detailBox} &`]: {
    fontSize: "16px",
  },
});

export const contentTitle = style({
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
    [`${postItem} &`]: {
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
