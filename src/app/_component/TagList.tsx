import * as postStyles from "@/app/_component/post.css";

type Tag = {
  tagId: string;
  item: string;
};

export default function TagList({ tags }: { tags: Tag[] }) {
  return (
    <div className={postStyles.tagList}>
      {tags.map((tag, index) => {
        if (index === 0) {
          return (
            <span
              key={index}
              className={`${postStyles.tagItem} ${postStyles.drinkTag}`}
            >
              {tag.item}
            </span>
          );
        }
        return (
          <span key={index} className={postStyles.tagItem}>
            {tag.item}
          </span>
        );
      })}
    </div>
  );
}
