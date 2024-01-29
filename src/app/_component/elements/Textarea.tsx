import * as commonStyles from "@/app/common.css";
import { ITextarea } from "@/types/Elements";

export default function Textarea(props: ITextarea) {
  const { placeholder, register } = props;
  return (
    <textarea
      className={commonStyles.textarea}
      placeholder={placeholder}
      {...register}
    />
  );
}
