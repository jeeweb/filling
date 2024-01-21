import Link from "next/link";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostListWrap from "./_component/PostListWrap";
import * as commonStyles from "./common.css";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
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
    initialPageParam: 0,
  });

  const dehydratedStae = dehydrate(queryClient);
  return (
    <>
      <section className={commonStyles.contentsBox}>
        <HydrationBoundary state={dehydratedStae}>
          <PostListWrap />
        </HydrationBoundary>
      </section>
    </>
  );
}
