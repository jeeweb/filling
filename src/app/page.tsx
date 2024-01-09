import Link from "next/link";
import * as commonStyles from "./common.css";
import * as cardStyles from "@/app/_component/card.css";
import Card from "./_component/Card";

export default function Home() {
  return (
    <>
      <section className={commonStyles.noContentsBox}>
        <div className={commonStyles.controlWrap}>
          <p className={commonStyles.infoText}>기록을 작성해주세요!</p>
          <Link href="/feed" className={commonStyles.btnWrite}>
            작성하기
          </Link>
        </div>
      </section>
      <section className={commonStyles.contentsBox}>
        <div
          className={`${commonStyles.scrollWrap} ${commonStyles.cardScrollWrap}`}
        >
          <ul className={cardStyles.cardList}>
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </section>
    </>
  );
}
