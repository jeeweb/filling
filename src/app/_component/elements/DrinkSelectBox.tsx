import { useQuery } from "@tanstack/react-query";
import { UseFormRegisterReturn } from "react-hook-form";
import { getDrinkList } from "@/app/_lib/getDrinkList";
import * as commonStyles from "@/app/common.css";
import { IconArrowDown } from "../icons/IconArrowDown";

type Props = {
  register: UseFormRegisterReturn;
};

export default function DrinkSelectBox(props: Props) {
  const { register } = props;
  const { data: drinkList, error } = useQuery({
    queryKey: ["drink"],
    queryFn: getDrinkList,
  });
  if (drinkList) {
    const keyArray = Object.keys(drinkList);
    return (
      <>
        <div className={commonStyles.selectBox}>
          <select className={commonStyles.select} {...register}>
            {keyArray?.map((key) => {
              return (
                <option value={key} key={key}>
                  {drinkList[key]}
                </option>
              );
            })}
          </select>
          <IconArrowDown />
        </div>
      </>
    );
  }
}
