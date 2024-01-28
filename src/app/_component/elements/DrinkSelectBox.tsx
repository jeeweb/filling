import * as commonStyles from "@/app/common.css";
import { IDrinkSelectBox } from "@/types/Elements";

export default function DrinkSelectBox(props: IDrinkSelectBox) {
  const { register, dataList } = props;
  return (
    <select className={commonStyles.selectBox} {...register}>
      {dataList?.map((drink) => {
        return (
          <option value={drink.drinkId} key={drink.drinkId}>
            {drink.category}
          </option>
        );
      })}
    </select>
  );
}
