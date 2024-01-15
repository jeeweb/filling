"use client";

import { ReactNode } from "react";
import * as commonStyles from "@/app/common.css";
import { useRouter } from "next/navigation";
import { IPost } from "@/types/Post";

export default function PostItem({
  children,
  post,
}: {
  children: ReactNode;
  post: IPost;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/posts/${post.postId}`);
  };
  return (
    <li className={commonStyles.postItem} onClick={onClick}>
      {children}
    </li>
  );
}
