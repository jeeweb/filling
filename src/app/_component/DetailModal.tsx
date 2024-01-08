"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as commonStyles from "@/app/common.css";
import * as postStyles from "@/app/_component/post.css";
import TagList from "./TagList";

export default function DetailModal() {
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  const example = {
    id: "1",
    image: "/sample1.jpeg",
    drink: "Corona",
    date: "2024. 01. 02",
    weather: "맑음",
    location: "비틀비틀",
    people: "홍길동",
    food: "타코",
    title: "제목 예시",
    contents: "컨텐츠 예시입니다",
  };

  return (
    <div className={commonStyles.modalWrap}>
      <article className={postStyles.detailBox}>
        <div className={postStyles.imgBox}>
          <Image src={example.image} alt="" fill={true} objectFit="cover" />
        </div>
        <div className={postStyles.summaryTextBox}>
          <div className={postStyles.dayInfo}>
            <span>{example.date}</span>
            <span className={postStyles.dayWeather}>{example.weather}</span>
          </div>
          <TagList />
          <div className={postStyles.drinkInfo}>
            <span>{example.drink}</span>
          </div>
          <p className={postStyles.contentTitle}>{example.title}</p>
          <div
            className={`${commonStyles.contentScrollWrap} ${commonStyles.scrollWrap}`}
          >
            <p className={postStyles.contentText}>{example.contents}</p>
          </div>
          <div className={postStyles.moreInfo}>
            <span>{example.location}</span>
            <span>{example.people}</span>
            <span>{example.food}</span>
          </div>
        </div>
        <button
          className={commonStyles.btnClose}
          onClick={onClickClose}
        ></button>
      </article>
    </div>
  );
}
