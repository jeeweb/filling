"use client";
import * as postStyles from "@/app/_component/post.css";

export default function TagList() {
  const example = {
    category: "맥주",
  };
  return (
    <div className={postStyles.tagList}>
      <span className={`${postStyles.tagItem} ${postStyles.drinkTag}`}>
        {example.category}
      </span>
      <span className={postStyles.tagItem}>선택1</span>
      <span className={postStyles.tagItem}>선택2</span>
    </div>
  );
}
