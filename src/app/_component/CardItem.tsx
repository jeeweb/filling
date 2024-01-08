"use client ";

import Link from "next/link";
import Image from "next/image";
import * as cardStyles from "@/app/_component/card.css";
import * as postStyles from "@/app/_component/post.css";
import TagList from "@/app/_component/TagList";

export default function CardItem() {
  const example = {
    id: "1",
    image: "/sample1.jpeg",
    title: "제목 예시",
    date: "2024. 01. 02",
    weather: "맑음",
  };

  return (
    <li className={cardStyles.cardItem}>
      <Link href={`/posts/${example.id}`} className={cardStyles.linkDetail}>
        <div className={postStyles.imgBox}>
          <Image src={example.image} alt="" fill={true} objectFit="cover" />
        </div>
        <div className={postStyles.summaryTextBox}>
          <TagList />
          <p>{example.title}</p>
          <div className={postStyles.dayInfo}>
            <span>{example.date}</span>
            <span className={postStyles.dayWeather}>{example.weather}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
