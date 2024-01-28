import * as commonStyles from "@/app/common.css";
import { IDrink } from "@/types/Drink";
import { IDrinkSelectBox } from "@/types/Elements";

export default function DrinkInfoSelectBox(props: IDrinkSelectBox) {
  const { dataList, register, watch, dataKey } = props;
  if (dataKey === "types") {
    return (
      <select className={commonStyles.selectBox} {...register}>
        {dataList
          ?.find((item: IDrink) => item.drinkId === watch)
          ?.types?.map((type, index) => {
            console.log(type);
            return (
              <option value={type} key={index}>
                {type}
              </option>
            );
          })}
      </select>
    );
  }
  if (dataKey === "country") {
    return (
      <select className={commonStyles.selectBox} {...register}>
        {dataList
          ?.find((item: IDrink) => item.drinkId === watch)
          ?.country?.map((country, idx) => {
            return (
              <option value={country} key={idx}>
                {country}
              </option>
            );
          })}
      </select>
    );
  }
}
