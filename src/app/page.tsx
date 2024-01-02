import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.noContentsBox}>
        <div className={styles.controlWrap}>
          <p className={styles.infoText}>기록을 작성해주세요!</p>
          <Link href="/feed" className={styles.btnWrite}>
            작성하기
          </Link>
        </div>
      </div>
      <div className={styles.inner}></div>
    </>
  );
}
