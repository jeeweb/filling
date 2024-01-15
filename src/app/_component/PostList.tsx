"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Post from "./Post";
import { IPost } from "@/types/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as commonStyles from "@/app/common.css";

export default function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useInfiniteQuery<IPost[], InfiniteData<IPost[]>>({
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
      getNextPageParam: (lastPage, allPage) => {
        // 한번에 5개씩 불러온다면,
        if (lastPage?.length === 0 || lastPage?.length < 5) {
          return undefined;
        }
        return allPage.length + 1;
      },
      initialPageParam: 0,
    });
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className={commonStyles.loadingSpinner}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <g stroke="#fbe285">
            <circle
              cx="12"
              cy="12"
              r="9.5"
              fill="none"
              stroke-linecap="round"
              stroke-width="3"
            >
              <animate
                attributeName="stroke-dasharray"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                keyTimes="0;0.475;0.95;1"
                repeatCount="indefinite"
                values="0 150;42 150;42 150;42 150"
              />
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                keyTimes="0;0.475;0.95;1"
                repeatCount="indefinite"
                values="0;-16;-59;-59"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              dur="2s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div>This is Error!</div>;
  }

  return (
    <>
      {data?.pages.map((page, idx) => (
        <Fragment key={idx}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref}></div>
    </>
  );
}
