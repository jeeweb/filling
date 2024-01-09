import Link from "next/link";
import Image from "next/image";
import * as cardStyles from "@/app/_component/card.css";
import * as postStyles from "@/app/_component/post.css";
import TagList from "@/app/_component/TagList";
import CardItem from "./CardItem";

export default function Card() {
  const example = {
    postId: "1",
    image: "/sample1.jpeg",
    tags: [
      { tagId: "tag01", item: "맥주" },
      { tagId: "tag02", item: "라거" },
    ],
    brand: "Corona",
    createdAt: new Date(),
    weather: "맑음",
    location: "비틀비틀",
    people: "홍길동",
    food: "타코",
    title: "제목 예시",
    contents: "컨텐츠 예시입니다",
  };

  return (
    <CardItem post={example}>
      <div className={postStyles.imgBox}>
        <Image src={example.image} alt="" fill={true} />
      </div>
      <div className={postStyles.summaryTextBox}>
        <TagList tags={example.tags} />
        <p>{example.title}</p>
        <div className={postStyles.dayInfo}>
          <span>{/*example.createdAt*/}</span>
          <span className={postStyles.dayWeather}>{example.weather}</span>
        </div>
      </div>
    </CardItem>
  );
}
