import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const formBox = style({
  margin: "8vh 0",
  padding: "16px",
  height: "calc(100vh - 60px - 16vh)",
  borderRadius: "12px",
  backgroundColor: vars.bgColor.white,
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
});

export const formRowGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  height: "100%",
});

export const formImgRow = style({
  flex: 1,
});

export const formBtnRow = style({
  justifyContent: "flex-end",
});

export const formRow = style({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  selectors: {
    [`&.${formImgRow}`]: {
      alignItems: "end",
      gap: "8px",
    },
    "& + &": {
      marginTop: "16px",
    },
  },
});

export const formItem = style({
  flex: 1,
});

export const imgBox = style({
  position: "relative",
  overflow: "hidden",
  width: "32vh",
  height: "100%",
  minHeight: "180px",
  background: "url('/icon-noimage.png') center no-repeat",
  backgroundColor: vars.bgColor.gray,
});
