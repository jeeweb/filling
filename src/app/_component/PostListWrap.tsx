"use client";
import { useState } from "react";
import PostList from "./PostList";
import * as commonStyles from "../common.css";
import cx from "classnames";

export default function PostListWrap() {
  const [listStyle, setListStyle] = useState("card");

  const onClickCard = () => {
    setListStyle("card");
  };
  const onClickBoard = () => {
    setListStyle("board");
  };

  return (
    <>
      <div className={commonStyles.btnListStyleWrap}>
        <button
          onClick={onClickCard}
          className={cx(commonStyles.btnListStyle, {
            [commonStyles.btnActive]: listStyle === "card",
          })}
        >
          카드
        </button>
        <button
          onClick={onClickBoard}
          className={cx(commonStyles.btnListStyle, {
            [commonStyles.btnActive]: listStyle === "board",
          })}
        >
          목록
        </button>
      </div>
      <div
        className={`${commonStyles.scrollWrap} ${commonStyles.cardScrollWrap}`}
      >
        <ul
          className={cx(
            {
              [commonStyles.cardList]: listStyle === "card",
            },
            {
              [commonStyles.boardList]: listStyle === "board",
            }
          )}
        >
          <PostList />
        </ul>
      </div>
    </>
  );
}
