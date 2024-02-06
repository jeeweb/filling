import * as userInfoStyles from "../userInfo.css";

type Props = {
  title: string;
  key: "total" | "lastMonth" | "thisMonth";
};

export default function StatisticsItem(props: Props) {
  const { title, key } = props;

  return (
    <div className={userInfoStyles.statisticsItem}>
      <div className={userInfoStyles.statisticsContent}>
        <span className={userInfoStyles.statisticsTitle}>{title}</span>
        <span className={userInfoStyles.statisticsValue}>10</span>
      </div>
    </div>
  );
}
