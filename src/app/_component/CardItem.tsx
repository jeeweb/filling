"use client";

import { ReactNode } from "react";
import * as commonStyles from "@/app/common.css";
import { useRouter } from "next/navigation";
import { Post } from "@/types/Post";

export default function CardItem({
  children,
  post,
}: {
  children: ReactNode;
  post: Post;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/posts/${post.postId}`);
  };
  return (
    <li className={commonStyles.cardItem} onClick={onClick}>
      {children}
    </li>
  );
}
