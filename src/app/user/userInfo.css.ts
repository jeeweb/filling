import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const userInfoBox = style({
  margin: "8vh 0",
  padding: "2rem",
  width: "100%",
  height: "calc(100vh - 4rem - 16vh)",
  borderRadius: "0.75rem",
  backgroundColor: vars.bgColor.white,
  boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.15)",
});

export const lastMonthSummaryText = style({
  fontSize: "2rem",
  marginBottom: "1rem",
});

export const summaryBoldText = style({
  fontFamily: vars.fontFamily.logo,
  fontSize: "1.6em",
});

export const chartBox = style({});
