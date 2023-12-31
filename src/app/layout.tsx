import type { Metadata } from "next";
import { Nav } from "./Nav";
import Link from "next/link";
import "./reset.css";
import * as styles from "./common.css";

export const metadata: Metadata = {
  title: "필링",
  description: "당신의 한잔을 기록하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className={styles.header}>
          <h1 className="header__logo">
            <Link href="/" className="header__logo-link">
              필링
            </Link>
          </h1>
          <Nav />
        </header>
        <section className={styles.container}>{children}</section>
      </body>
    </html>
  );
}
