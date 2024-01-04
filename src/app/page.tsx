"use client";
import Link from "next/link";
import Image from "next/image";
import * as homeStyles from "./home.css";

export default function Home() {
  return (
    <>
      <section className={homeStyles.noContentsBox}>
        <div className={homeStyles.controlWrap}>
          <p className={homeStyles.infoText}>기록을 작성해주세요!</p>
          <Link href="/feed" className={homeStyles.btnWrite}>
            작성하기
          </Link>
        </div>
      </section>
      <section className={homeStyles.contentsBox}>
        <ul className={homeStyles.cardList}>
          <li className={homeStyles.cardItem}>
            <div className={homeStyles.imgBox}>
              <Image src="/sample1.jpeg" alt="" fill={true} objectFit="cover" />
            </div>
            <div className={homeStyles.summaryTextBox}>
              <div className={homeStyles.tagList}>
                <span
                  className={`${homeStyles.tagItem} ${homeStyles.drinkTag}`}
                >
                  주종
                </span>
                <span className={homeStyles.tagItem}>선택1</span>
                <span className={homeStyles.tagItem}>선택2</span>
                <span className={homeStyles.tagItem}>브랜드명</span>
                <span className={homeStyles.tagItem}>YYYY</span>
              </div>
              <p>title title title title</p>
              <div className={homeStyles.dayInfo}>
                <span>YYYY.MM.DD</span>
                <span className={homeStyles.dayWeather}>날씨</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
