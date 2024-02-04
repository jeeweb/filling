import * as commonStyles from "@/app/common.css";
import * as userInfoStyles from "./userInfo.css";

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
            <div className={userInfoStyles.chartBox}>chart</div>
          </div>
        </div>
      </div>
    </section>
  );
}
