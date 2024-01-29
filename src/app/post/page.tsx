"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import ImagePreview from "./_component/ImagePreview";
import InputText from "../_component/elements/InputText";
import DrinkSelectBox from "../_component/elements/DrinkSelectBox";
import DrinkInfoSelectBox from "../_component/elements/DrinkInfoSelectBox";
import CheckBox from "../_component/elements/CheckBox";
import SmallButton from "../_component/elements/SmallButton";
import SubmitButton from "../_component/elements/SubmitButton";
import { IPost } from "@/types/Post";
import * as formStyles from "./postForm.css";
import * as commonStyles from "@/app/common.css";
import "react-datepicker/dist/react-datepicker.css";
import Textarea from "../_component/elements/Textarea";

export default function PostForm() {
  const { register, handleSubmit, setValue, watch, control } = useForm<IPost>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const InputMoreDrinkDetails = (selectedDrink: string) => {
    console.log(selectedDrink);
    switch (selectedDrink) {
      case "Soju":
      case "Vodka":
      case "Tequila":
        return (
          <InputText placeholder="생산지" register={register("country")} />
        );
      case "Beer":
      case "KoreanTraditionalLiquor":
        return (
          <>
            <InputText placeholder="생산지" register={register("country")} />
            <InputText placeholder="양조장" register={register("brewery")} />
          </>
        );
      case "Wine":
      case "Whiskey":
        return (
          <InputText
            placeholder="빈티지/숙성연도"
            register={register("vintage")}
          />
        );
      case "Rum":
      case "Brandy":
        return (
          <>
            <InputText
              placeholder="종류/등급"
              register={register("drinkType")}
            />
            <InputText placeholder="생산지" register={register("country")} />
          </>
        );
      case "Cocktail":
        return (
          <>
            <InputText placeholder="베이스" register={register("base")} />
            <InputText
              placeholder="사용재료"
              register={register("ingredients")}
            />
          </>
        );
      case "Etc":
        return (
          <>
            <InputText placeholder="주종" register={register("base")} />
            <InputText placeholder="생산지" register={register("country")} />
          </>
        );
    }
  };

  const onValid = async (data: IPost) => {
    data.postId = "newid";
    try {
      await fetch("/api/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => console.log(result));
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className={commonStyles.contentsBox}>
      <div className={commonStyles.inner}>
        <div className={formStyles.formBox}>
          <form
            onSubmit={handleSubmit(onValid)}
            className={formStyles.formRowGroup}
          >
            <div
              className={`${commonStyles.scrollWrap} ${commonStyles.formScrollWrap}`}
            >
              <div className={`${formStyles.formImgRow} ${formStyles.formRow}`}>
                <ImagePreview />
              </div>
              <div
                className={`${commonStyles.inputGroup} ${formStyles.formRow}`}
              >
                <DrinkSelectBox
                  register={register("drink", { required: true })}
                />
                {watch("drink") === "Wine" || watch("drink") === "Whiskey" ? (
                  <>
                    <DrinkInfoSelectBox
                      register={register("drinkType")}
                      watch={watch("drink")}
                      dataKey={"drinkTypes"}
                    />
                    <DrinkInfoSelectBox
                      register={register("country")}
                      watch={watch("drink")}
                      dataKey={"country"}
                    />
                  </>
                ) : null}
                <InputText
                  placeholder="브랜드명/상품명"
                  register={register("brand", {
                    required: "필수 항목 입니다.",
                  })}
                />
                {watch("drink") ? InputMoreDrinkDetails(watch("drink")) : null}
              </div>
              <InputText
                divClassName={formStyles.formRow}
                placeholder="제목을 입력하세요"
                register={register("title", { required: "필수 항목 입니다." })}
              />
              <div
                className={`${commonStyles.inputBox} ${formStyles.formRow}`}
                style={{ marginTop: "8px" }}
              >
                <Textarea
                  placeholder="기억하고 싶은 순간을 기록하세요"
                  register={register("contents", {
                    required: "필수 항목 입니다.",
                  })}
                />
              </div>
              <div className={formStyles.formRow}>
                <div
                  className={`${commonStyles.inputGroup} ${formStyles.formItem}`}
                >
                  <InputText
                    placeholder="어디에서 마셨나요"
                    register={{ ...register("location") }}
                  />
                  <CheckBox id={"ck1"} value={"집"} />
                  {/* <SmallButton value={"지도에서 찾기"} onClick={openMap}/> */}
                </div>
                <InputText
                  divClassName={formStyles.formItem}
                  placeholder="어떤 음식과 함께였나요"
                  register={{ ...register("food") }}
                />
              </div>
              <div className={formStyles.formRow}>
                <div
                  className={`${commonStyles.inputBox} ${formStyles.formItem}`}
                >
                  <Controller
                    control={control}
                    name="createdAt"
                    defaultValue={selectedDate}
                    render={({ field: onChange }) => (
                      <DatePicker
                        selected={selectedDate}
                        onChange={(selectedDate: Date) => {
                          setValue("createdAt", selectedDate, {
                            shouldDirty: true,
                          });
                          setSelectedDate(selectedDate);
                        }}
                        dateFormat="yyyy.MM.dd"
                      />
                    )}
                  />
                </div>
                <InputText
                  divClassName={formStyles.formItem}
                  placeholder="날씨는 어땠나요"
                  register={{ ...register("weather") }}
                />
                <div
                  className={`${commonStyles.inputGroup} ${formStyles.formItem}`}
                >
                  <InputText
                    placeholder="누구와 함께였나요"
                    register={{ ...register("people") }}
                  />
                  <CheckBox id={"ck2"} value={"혼자"} />
                </div>
              </div>
            </div>
            <div className={`${formStyles.formBtnRow} ${formStyles.formRow}`}>
              <SubmitButton value="게시하기" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
