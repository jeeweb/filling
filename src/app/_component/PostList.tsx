"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Post from "./Post";
import { IPost } from "@/types/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as commonStyles from "@/app/common.css";
import { LoadingSpinner } from "./LoadingSpinner";

const LIMIT = 1;

const fetchPosts = async ({ pageParam = 1 }: { pageParam: number }) => {
  console.log("pageParam: ", pageParam, "perPage: ", LIMIT);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?per_page=${LIMIT}&page=${pageParam}`
    );
    return response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};

export default function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: fetchPosts,
      getNextPageParam: (lastPage, allPage) => {
        // console.log("lastPage: ", lastPage, "allPage: ", allPage);
        if (lastPage?.length === 0 || lastPage?.length < LIMIT) {
          return undefined;
        }
        return lastPage.at(-1)?.param + 1;
      },
      initialPageParam: 0,
    });
  const { ref, inView } = useInView();
  // console.log("data : ", data);
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>This is Error!</div>;
  }

  return (
    <>
      {data?.pages.map((page, idx) => (
        <Fragment key={idx}>
          {page.map((post: IPost) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref}></div>
    </>
  );
}
