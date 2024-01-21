"use client";
import Link from "next/link";
import * as styles from "./common.css";

export function Nav() {
  return (
    <nav className="nav">
      <ul className={styles.navList}>
        <li className="nav__item">
          <Link href="/lists" className="nav__link">
            내 기록
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/feed" className="nav__link">
            작성하기
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/users" className="nav__link">
            내 정보
          </Link>
        </li>
      </ul>
    </nav>
  );
}
