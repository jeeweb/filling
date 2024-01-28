import * as commonStyles from "@/app/common.css";
import { IInputText } from "@/types/Elements";

export default function InputText(props: IInputText) {
  const { divClassName, placeholder, register } = props;
  return (
    <div className={`${commonStyles.inputBox} ${divClassName}`}>
      <input
        type="text"
        className={commonStyles.inputText}
        placeholder={placeholder}
        defaultValue={""}
        {...register}
      ></input>
    </div>
  );
}
