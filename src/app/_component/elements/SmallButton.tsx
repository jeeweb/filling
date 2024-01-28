import * as commonStyles from "@/app/common.css";
import { IButton } from "@/types/Elements";

export default function SmallButton(props: IButton) {
  const { value, onClick } = props;
  return (
    <button
      className={`${commonStyles.btn} ${commonStyles.btnSmall}`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
