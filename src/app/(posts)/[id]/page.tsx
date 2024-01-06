"use client";
import Image from "next/image";
import * as homeStyles from "../../home.css";

export default function Detail() {
  return (
    <>
      <div className={homeStyles.dim}></div>
      <article className={homeStyles.detailBox}>
        <div className={homeStyles.imgBox}>
          <Image src="/sample1.jpeg" alt="" fill={true} objectFit="cover" />
        </div>
        <div className={homeStyles.summaryTextBox}>
          <div className={homeStyles.dayInfo}>
            <span>YYYY.MM.DD</span>
            <span className={homeStyles.dayWeather}>날씨</span>
          </div>
          <div className={homeStyles.tagList}>
            <span className={`${homeStyles.drinkTag} ${homeStyles.tagItem}`}>
              주종
            </span>
            <span className={homeStyles.tagItem}>선택1</span>
            <span className={homeStyles.tagItem}>선택2</span>
          </div>
          <div className={homeStyles.drinkInfo}>
            <span>브랜드명</span>
            <span>YYYY</span>
          </div>
          <p className={homeStyles.contentTitle}>title</p>
          <div
            className={`${homeStyles.contentScrollWrap} ${homeStyles.scrollWrap}`}
          >
            <p className={homeStyles.contentText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={homeStyles.moreInfo}>
            <span>장소</span>
            <span>누구와</span>
            <span>음식</span>
          </div>
        </div>
        <button className={homeStyles.btnClose}></button>
      </article>
    </>
  );
}
