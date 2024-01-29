import { useQuery } from "@tanstack/react-query";
import { UseFormRegisterReturn } from "react-hook-form";
import { getDrinkList } from "@/app/_lib/getDrinkList";
import * as commonStyles from "@/app/common.css";

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
        <select className={commonStyles.selectBox} {...register}>
          {keyArray?.map((key) => {
            return (
              <option value={key} key={key}>
                {drinkList[key]}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}
