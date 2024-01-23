import Image from "next/image";
import * as postStyles from "@/app/_component/post.css";
import PostItem from "./PostItem";
import { IPost } from "@/types/Post";

export default function Post({ post }: { post: IPost }) {
  return (
    <PostItem post={post}>
      <div className={postStyles.imgBox}>
        <Image src={post.image} alt="" fill={true} priority />
      </div>
      <div className={postStyles.summaryTextBox}>
        <div className={postStyles.tagList}>
          <span className={`${postStyles.tagItem} ${postStyles.drinkTag}`}>
            {post.drink}
          </span>
          {post.type ? (
            <span className={postStyles.tagItem}>{post.type}</span>
          ) : (
            ""
          )}
          {post.country ? (
            <span className={postStyles.tagItem}>{post.country}</span>
          ) : (
            ""
          )}
        </div>
        <div className={postStyles.drinkInfo}>
          <span>{post.brand}</span>
        </div>
        <p className={postStyles.contentTitle}>{post.title}</p>
        <div className={postStyles.dayInfo}>
          <span>{`${new Date().getFullYear()}. ${
            new Date().getMonth() + 1
          }. ${new Date().getDate()}`}</span>
          <span className={postStyles.dayWeather}>{post.weather}</span>
        </div>
      </div>
    </PostItem>
  );
}
