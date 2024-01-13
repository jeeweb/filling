import type { Metadata } from "next";
import { Nav } from "./Nav";
import Link from "next/link";
import "./reset.css";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import * as commonStyles from "./common.css";
import { MockService } from "./_component/MockService";
import ReactQueryProvider from "./_component/ReactQueryProvider";

export const metadata: Metadata = {
  title: "필링",
  description: "당신의 한잔을 기록하세요",
};

export const notoSansKr = Noto_Sans_KR({
  display: "swap",
  preload: false,
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const blackHanSans = Black_Han_Sans({
  preload: false,
  weight: "400",
  variable: "--font-black-han-sans",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${blackHanSans.variable}`}
    >
      <body className={commonStyles.common}>
        <MockService />
        <header className={commonStyles.header}>
          <h1 className={commonStyles.logo}>
            <Link href="/">필링</Link>
          </h1>
          <Nav />
        </header>
        <ReactQueryProvider>
          <div className={commonStyles.container}>
            {children}
            {modal}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
