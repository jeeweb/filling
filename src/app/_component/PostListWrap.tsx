"use client";

import { useState } from "react";
import PostList from "./PostList";
import * as commonStyles from "../common.css";
import cx from "classnames";
import SmallButton from "./elements/SmallButton";

export default function PostListWrap() {
  const [listStyle, setListStyle] = useState("card");

  const onClickCard = () => {
    setListStyle("card");
  };
  const onClickBoard = () => {
    setListStyle("board");
  };

  return (
    <div className={commonStyles.inner}>
      <div className={commonStyles.btnListStyleWrap}>
        <SmallButton
          value="카드"
          onClick={onClickCard}
          className={cx(commonStyles.btn, commonStyles.btnSmall, {
            [commonStyles.btnActive]: listStyle === "card",
          })}
        />
        <SmallButton
          value="목록"
          onClick={onClickBoard}
          className={cx(commonStyles.btn, commonStyles.btnSmall, {
            [commonStyles.btnActive]: listStyle === "board",
          })}
        />
      </div>
      <div
        className={cx(
          commonStyles.scrollWrap,
          {
            [commonStyles.cardScrollWrap]: listStyle === "card",
          },
          {
            [commonStyles.listScrollWrap]: listStyle === "board",
          }
        )}
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
    </div>
  );
}
