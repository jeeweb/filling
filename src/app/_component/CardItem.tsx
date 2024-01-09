"use client";

import { ReactNode } from "react";
import * as cardStyles from "@/app/_component/card.css";
import { useRouter } from "next/navigation";

type Tag = {
  tagId: string;
  item: string;
};

type Props = {
  children: ReactNode;
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

export default function CardItem({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/posts/${post.postId}`);
  };
  return (
    <li className={cardStyles.cardItem} onClick={onClick}>
      {children}
    </li>
  );
}
