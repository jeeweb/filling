import * as commonStyles from "@/app/common.css";
import { IButton } from "@/types/Elements";

export default function SubmitButton(props: IButton) {
  const { value } = props;
  return (
    <button
      type="submit"
      className={`${commonStyles.btn} ${commonStyles.btnSubmit}`}
    >
      {value}
    </button>
  );
}
