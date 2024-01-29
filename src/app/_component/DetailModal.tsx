"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import * as commonStyles from "@/app/common.css";
import * as postStyles from "@/app/_component/post.css";
import { IPost } from "@/types/Post";

export default function DetailModal({ id }: { id: string }) {
  const { data: post, error } = useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: async ({ queryKey }) => {
      const [_1, id] = queryKey;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return data;
    },
  });
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  if (!post) {
    return (
      <div className={`${commonStyles.noContentsBox}`}>
        <div className={commonStyles.controlWrap}>
          <span style={{ fontSize: "36px" }}>🫥</span>
          <p className={commonStyles.infoText}>게시글을 찾을 수 없습니다</p>
        </div>
      </div>
    );
  }
  return (
    <div className={commonStyles.modalWrap}>
      <article className={postStyles.detailBox}>
        <div className={postStyles.imgBox}>
          <Image src={post.image} alt="" fill={true} priority />
        </div>
        <div className={postStyles.summaryTextBox}>
          <div className={postStyles.dayInfo}>
            <span>{`${new Date().getFullYear()}. ${
              new Date().getMonth() + 1
            }. ${new Date().getDate()}`}</span>
            <span className={postStyles.dayWeather}>{post.weather}</span>
          </div>
          <div className={postStyles.tagList}>
            <span className={`${postStyles.tagItem} ${postStyles.drinkTag}`}>
              {post.drink === "기타" ? post.base : post.drink}
            </span>
            {post.drinkType || post.drink === "칵테일" ? (
              <span className={postStyles.tagItem}>
                {post.drinkType || post.base}
              </span>
            ) : null}
            {post.country || post.city ? (
              <span className={postStyles.tagItem}>
                {post.country || post.city}
              </span>
            ) : null}
          </div>
          <div className={postStyles.drinkInfo}>
            <span>{post.brand}</span>
          </div>
          <p className={postStyles.contentTitle}>{post.title}</p>
          <div
            className={`${commonStyles.contentScrollWrap} ${commonStyles.scrollWrap}`}
          >
            <p className={postStyles.contentText}>{post.contents}</p>
          </div>
          <div className={postStyles.moreInfo}>
            <span>{post.location}</span>
            <span>{post.people}</span>
            <span>{post.food}</span>
          </div>
        </div>
        <button
          className={`${commonStyles.btnIcon} ${commonStyles.btnClose}`}
          onClick={onClickClose}
        ></button>
      </article>
    </div>
  );
}
