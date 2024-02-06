import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const userInfoBox = style({
  margin: "8vh 0",
  padding: "3rem",
  width: "100%",
  maxHeight: "calc(100vh - 4rem - 16vh)",
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

export const dashboardBox = style({
  display: "flex",
  gap: "1rem",
});

export const chartBox = style({
  width: "368px",
});

export const statisticsList = style({
  flex: 1,
});

export const statisticsItem = style({
  display: "flex",
  padding: "1rem 1.24rem",
  border: `1px solid ${vars.bgColor.gray}`,
  borderRadius: "0.8rem",
  selectors: {
    ["& + &"]: {
      marginTop: "1rem",
    },
  },
});

export const statisticsContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const statisticsTitle = style({});

export const statisticsValue = style({
  fontFamily: vars.fontFamily.logo,
  fontSize: "2rem",
});
