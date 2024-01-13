"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { Post } from "@/types/Post";

export default function CardList() {
  const { data } = useQuery<Post[]>({
    queryKey: ["list"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return data;
    },
  });
  return data?.map((post) => <Card key={post.postId} post={post} />);
}
