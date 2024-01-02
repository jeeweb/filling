import type { Metadata } from "next";
import { Nav } from "./Nav";
import Link from "next/link";
import "./reset.css";
import { Noto_Sans_KR, Black_Han_Sans } from "next/font/google";
import * as styles from "./common.css";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${blackHanSans.variable}`}
    >
      <body className={styles.common}>
        <header className={styles.header}>
          <h1 className={styles.logo}>
            <Link href="/">필링</Link>
          </h1>
          <Nav />
        </header>
        <section className={styles.container}>{children}</section>
      </body>
    </html>
  );
}
