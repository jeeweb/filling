import * as commonStyles from "@/app/common.css";
import { ICheckBox } from "@/types/Elements";

export default function CheckBox(props: ICheckBox) {
  const { id, value } = props;
  return (
    <div className={commonStyles.checkBox}>
      <input type="checkbox" className={commonStyles.inputCheck} id={id} />
      <label htmlFor={id} className={commonStyles.inputCheckLabel}>
        <span className={commonStyles.inputCheckLabelText}>{value}</span>
      </label>
    </div>
  );
}
