"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Post from "./Post";
import { IPost } from "@/types/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingSpinner } from "./elements/LoadingSpinner";
import * as commonStyles from "../common.css";

const LIMIT = 4;

const fetchPosts = async ({ pageParam = 0 }: { pageParam: number }) => {
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
        return allPage.length;
      },
      initialPageParam: 0,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      if (inView && hasNextPage) fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>This is Error!</div>;
  }

  if (data?.pages[0].length > 0) {
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
  } else {
    return (
      <li className={commonStyles.controlWrap}>
        <p className={commonStyles.infoText}>기록을 작성해주세요!</p>
      </li>
    );
  }
}
