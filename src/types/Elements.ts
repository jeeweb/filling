import { UseFormRegisterReturn } from "react-hook-form";
import { IDrink } from "./Drink";
import { MouseEventHandler } from "react";

export interface IButton {
  value: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IInputText {
  divClassName?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
}

export interface IDrinkSelectBox {
  dataList: IDrink[];
  dataKey?: string;
  register: UseFormRegisterReturn;
  watch?: string;
}

export interface ICheckBox {
  id: string;
  value: string;
}

export interface ITextarea {
  placeholder: string;
  register?: UseFormRegisterReturn;
}
