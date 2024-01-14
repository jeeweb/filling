import Link from "next/link";
import * as commonStyles from "./common.css";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import CardList from "./_component/CardList";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
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

  const dehydratedStae = dehydrate(queryClient);

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
        <HydrationBoundary state={dehydratedStae}>
          <div
            className={`${commonStyles.scrollWrap} ${commonStyles.cardScrollWrap}`}
          >
            <ul className={commonStyles.cardList}>
              <CardList />
            </ul>
          </div>
        </HydrationBoundary>
      </section>
    </>
  );
}
