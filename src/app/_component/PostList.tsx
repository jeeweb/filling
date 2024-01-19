"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Post from "./Post";
import { IPost } from "@/types/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingSpinner } from "./LoadingSpinner";
import * as commonStyles from "../common.css";

const LIMIT = 4;

const fetchPosts = async ({ pageParam = 0 }: { pageParam: number }) => {
  // console.log("pageParam: ", pageParam, "perPage: ", LIMIT);
  try {
    // debugger;
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
        return allPage.length;
      },
      initialPageParam: 0,
    });

  const { ref, inView } = useInView();
  // console.log("data : ", data);

  useEffect(() => {
    if (inView) {
      // console.log(inView, "스크롤 요청");
      // console.log("isFetching: ", isFetching, "hasNextPage : ", hasNextPage);
      if (inView && hasNextPage) fetchNextPage();
    }
  }, [inView]);

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
      <li className={commonStyles.observer} ref={ref}>
        {isFetching ? <LoadingSpinner /> : "😋"}
      </li>
    </>
  );
}
