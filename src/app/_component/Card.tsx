import Image from "next/image";
import * as cardStyles from "@/app/_component/card.css";
import * as postStyles from "@/app/_component/post.css";
import TagList from "@/app/_component/TagList";
import CardItem from "./CardItem";

type Tag = {
  tagId: string;
  item: string;
};

type Props = {
  post: {
    postId: string;
    tags: Tag[];
    image: string;
    brand?: string;
    country?: string;
    brewery?: string;
    type?: string;
    vintage?: Date;
    name?: string;
    base?: string;
    ingredients?: string;
    drink?: string;
    createdAt: Date;
    weather?: string;
    location: string;
    people?: string;
    food: string;
    title: string;
    contents: string;
  };
};

export default function Card({ post }: Props) {
  return (
    <CardItem post={post}>
      <div className={postStyles.imgBox}>
        <Image src={post.image} alt="" fill={true} />
      </div>
      <div className={postStyles.summaryTextBox}>
        <TagList tags={post.tags} />
        <p>{post.title}</p>
        <div className={postStyles.dayInfo}>
          <span>{/*post.createdAt*/}</span>
          <span className={postStyles.dayWeather}>{post.weather}</span>
        </div>
      </div>
    </CardItem>
  );
}
