import { useQuery } from "@tanstack/react-query";
import { UseFormRegisterReturn } from "react-hook-form";
import * as commonStyles from "@/app/common.css";
import { IDrink } from "@/types/Drink";
import { IconArrowDown } from "../icons/IconArrowDown";

type Props = {
  register: UseFormRegisterReturn;
  watch: string;
  dataKey: string;
};

export default function DrinkInfoSelectBox(props: Props) {
  const { register, watch, dataKey } = props;
  const { data: drinkDetail, error } = useQuery({
    queryKey: ["drinkDetail"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/drink-details`
        );
        return response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });

  if (dataKey === "drinkTypes") {
    return (
      <div className={commonStyles.selectBox}>
        <select className={commonStyles.select} {...register}>
          {drinkDetail
            ?.find((item: IDrink) => item.category === watch)
            ?.drinkTypes?.map((type: string, index: number) => {
              console.log(type);
              return (
                <option value={type} key={index}>
                  {type}
                </option>
              );
            })}
        </select>
        <IconArrowDown />
      </div>
    );
  }
  if (dataKey === "country") {
    return (
      <div className={commonStyles.selectBox}>
        <select className={commonStyles.select} {...register}>
          {drinkDetail
            ?.find((item: IDrink) => item.category === watch)
            ?.country?.map((country: string, index: number) => {
              return (
                <option value={country} key={index}>
                  {country}
                </option>
              );
            })}
        </select>
        <IconArrowDown />
      </div>
    );
  }
}
