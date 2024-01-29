import * as commonStyles from "@/app/common.css";
import { IButton } from "@/types/Elements";

export default function SmallButton(props: IButton) {
  const {
    value,
    onClick,
    className = `${commonStyles.btn} ${commonStyles.btnSmall}`,
  } = props;
  return (
    <button className={className} type="button" onClick={onClick}>
      {value}
    </button>
  );
}
