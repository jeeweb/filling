import Image from "next/image";
import * as cardStyles from "@/app/_component/card.css";
import * as postStyles from "@/app/_component/post.css";
import TagList from "@/app/_component/TagList";
import CardItem from "./CardItem";
import { Post } from "@/types/Post";

export default function Card({ post }: { post: Post }) {
  return (
    <CardItem post={post}>
      <div className={postStyles.imgBox}>
        <Image src={post.image} alt="" fill={true} />
      </div>
      <div className={postStyles.summaryTextBox}>
        <TagList tags={post.tags} />
        <p>{post.title}</p>
        <div className={postStyles.dayInfo}>
          <span>{`${new Date().getFullYear()}. ${
            new Date().getMonth() + 1
          }. ${new Date().getDate()}`}</span>
          <span className={postStyles.dayWeather}>{post.weather}</span>
        </div>
      </div>
    </CardItem>
  );
}
