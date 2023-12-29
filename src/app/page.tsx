"use client";
import Link from "next/link";
import * as styles from "./home.css";

export default function Home() {
  return (
    <>
      <div className={styles.inner}>
        <div className={styles.noContentsBox}>
          <p>기록을 작성해주세요!</p>
        </div>
        <Link href="/feed" className={styles.btnWrite}>
          작성하기
        </Link>
      </div>
    </>
  );
}
