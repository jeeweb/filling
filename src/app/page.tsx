import Link from "next/link";
import * as commonStyles from "./common.css";
import * as cardStyles from "@/app/_component/card.css";
import Card from "./_component/Card";

const example = {
  postId: "123",
  image: "/sample1.jpeg",
  tags: [{ tagId: "tag01", item: "맥주" }],
  brand: "Corona",
  createdAt: new Date(),
  weather: "맑음",
  location: "비틀비틀",
  people: "홍길동",
  food: "타코",
  title: "제목 예시",
  contents: "컨텐츠 예시입니다",
};

export default async function Home() {
  return (
    <>
      <section className={commonStyles.noContentsBox}>
        <div className={commonStyles.controlWrap}>
          <p className={commonStyles.infoText}>기록을 작성해주세요!</p>
          <Link href="/feed" className={commonStyles.btnWrite}>
            작성하기
          </Link>
        </div>
      </section>
      <section className={commonStyles.contentsBox}>
        <div
          className={`${commonStyles.scrollWrap} ${commonStyles.cardScrollWrap}`}
        >
          <ul className={cardStyles.cardList}>
            <Card post={example} />
          </ul>
        </div>
      </section>
    </>
  );
}
