import * as commonStyles from "@/app/common.css";
import * as userInfoStyles from "./userInfo.css";
import DrinkChart from "./_component/DrinkChart";
import StatisticsItem from "./_component/StatisticsItem";

const getLastMonth = () => {
  const today = new Date();
  return today.getMonth();
};

const getLastDrink = "맥주";

export default async function MyPage() {
  return (
    <section className={commonStyles.contentsBox}>
      <div className={commonStyles.inner}>
        <div className={userInfoStyles.userInfoBox}>
          <div>
            <p className={userInfoStyles.lastMonthSummaryText}>
              <span className={userInfoStyles.summaryBoldText}>
                {getLastMonth()}월
              </span>
              에는 주로{" "}
              <span className={userInfoStyles.summaryBoldText}>
                {getLastDrink}
              </span>
              를 마셨어요!
            </p>
          </div>
          <div className={userInfoStyles.dashboardBox}>
            <div className={userInfoStyles.statisticsList}>
              <StatisticsItem title="총 작성 수" key="total" />
              <StatisticsItem title="지난 달" key="lastMonth" />
              <StatisticsItem title="이번 달" key="thisMonth" />
            </div>
            <div className={userInfoStyles.chartBox}>
              <DrinkChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
