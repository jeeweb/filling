import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("body", {
  lineHeight: "1",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("input", {
  padding: 0,
  margin: 0,
  border: 0,
  background: "none",
});

globalStyle("input:focus", {
  outline: "none",
});

globalStyle("button", {
  padding: 0,
  margin: 0,
  border: 0,
  fontSize: "inherit",
  fontFamily: "inherit",
  color: "inherit",
  background: "none",
  cursor: "pointer",
});

globalStyle("img", {
  width: "100%",
  height: "auto",
});
