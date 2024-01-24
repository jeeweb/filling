"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import * as formStyles from "./postForm.css";
import * as commonStyles from "@/app/common.css";
import "react-datepicker/dist/react-datepicker.css";
import { IDrink } from "@/types/Drink";
import { IPost } from "@/types/Post";

export default function PostForm() {
  const { register, handleSubmit, setValue, watch, control } = useForm<IPost>();
  const imageRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const { data: drinkList, error } = useQuery<IDrink[]>({
    queryKey: ["drink"],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/post`
        );
        return response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });

  // const uploadImg = () => {
  //   imageRef.current?.click();
  // };

  const imgFile = watch("image");

  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const file = imgFile[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [imgFile]);

  const showMoreInput = (drink: string) => {
    switch (drink) {
      case "맥주":
      case "보드카":
      case "데낄라":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
                defaultValue={""}
                {...register("country")}
              ></input>
            </div>
          </>
        );
      case "전통주":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
                defaultValue={""}
                {...register("country")}
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="양조장"
                {...register("brewery")}
              ></input>
            </div>
          </>
        );
      case "와인":
      case "위스키":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="빈티지/숙성연도"
                {...register("vintage")}
              ></input>
            </div>
          </>
        );
      case "럼":
      case "브랜디":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="종류/등급"
                {...register("type")}
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
                {...register("country")}
              ></input>
            </div>
          </>
        );
      case "칵테일":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="베이스"
                {...register("base")}
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="사용재료"
                {...register("ingredients")}
              ></input>
            </div>
          </>
        );
      case "기타":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="주종"
                defaultValue={""}
                {...register("drink")}
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
                defaultValue={""}
                {...register("country")}
              ></input>
            </div>
          </>
        );
    }
  };

  const onValid = async (data: IPost) => {
    data.postId = "newid";
    console.log(data, JSON.stringify(data));
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
                <div className={formStyles.imgBox}>
                  {imgPreview ? (
                    <Image src={imgPreview} alt="" fill={true} priority />
                  ) : null}
                </div>
                <div>
                  {/* <button
                    className={`${commonStyles.btn} ${commonStyles.btnSmall}`}
                    type="button"
                    onClick={uploadImg}
                  >
                    사진첨부
                  </button> */}
                  <input
                    type="file"
                    accept="image/*"
                    //hidden
                    {...register("image", { required: true })}
                  />
                </div>
              </div>
              <div
                className={`${commonStyles.inputGroup} ${formStyles.formRow}`}
              >
                <select
                  className={commonStyles.selectBox}
                  {...register("drink", { required: true })}
                >
                  {drinkList?.map((drink) => {
                    return (
                      <option value={drink.category} key={drink.drinkId}>
                        {drink.category}
                      </option>
                    );
                  })}
                </select>
                {watch("drink") === "와인" || watch("drink") === "위스키" ? (
                  <>
                    <select
                      className={commonStyles.selectBox}
                      {...register("type")}
                    >
                      {drinkList
                        ?.find(
                          (item: IDrink) => item.category === watch("drink")
                        )
                        ?.types?.map((type, idx) => {
                          return (
                            <option value={type} key={idx}>
                              {type}
                            </option>
                          );
                        })}
                    </select>
                    <select
                      className={commonStyles.selectBox}
                      {...register("country")}
                    >
                      {drinkList
                        ?.find(
                          (item: IDrink) => item.category === watch("drink")
                        )
                        ?.country?.map((country, idx) => {
                          return (
                            <option value={country} key={idx}>
                              {country}
                            </option>
                          );
                        })}
                    </select>
                  </>
                ) : null}
                <div className={commonStyles.inputBox}>
                  <input
                    type="text"
                    className={commonStyles.inputText}
                    placeholder="브랜드명/상품명"
                    {...register("brand", { required: "필수 항목 입니다." })}
                  ></input>
                </div>
                {watch("drink") ? showMoreInput(watch("drink")) : null}
              </div>
              <div className={`${commonStyles.inputBox} ${formStyles.formRow}`}>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="제목을 입력하세요"
                  {...register("title", { required: "필수 항목 입니다." })}
                ></input>
              </div>
              <div
                className={`${commonStyles.inputBox} ${formStyles.formRow}`}
                style={{ marginTop: "8px" }}
              >
                <textarea
                  className={commonStyles.textarea}
                  placeholder="기억하고 싶은 순간을 기록하세요"
                  {...register("contents", { required: "필수 항목 입니다." })}
                />
              </div>
              <div className={formStyles.formRow}>
                <div
                  className={`${commonStyles.inputGroup} ${formStyles.formItem}`}
                >
                  <div className={commonStyles.inputBox}>
                    <input
                      type="text"
                      className={commonStyles.inputText}
                      placeholder="어디에서 마셨나요"
                      {...register("location")}
                    ></input>
                  </div>
                  <div className={commonStyles.checkBox}>
                    <input
                      type="checkbox"
                      className={commonStyles.inputCheck}
                      id="chk1"
                    />
                    <label
                      htmlFor="chk1"
                      className={commonStyles.inputCheckLabel}
                    >
                      <span className={commonStyles.inputCheckLabelText}>
                        집
                      </span>
                    </label>
                  </div>
                  {/* <button
                  className={`${commonStyles.btn} ${commonStyles.btnSmall}`}
                  type="button"
                  onClick={openMap}
                >
                  지도에서 찾기
                </button> */}
                </div>
                <div
                  className={`${commonStyles.inputBox} ${formStyles.formItem}`}
                >
                  <input
                    type="text"
                    className={commonStyles.inputText}
                    placeholder="어떤 음식과 함께였나요"
                    {...register("food")}
                  ></input>
                </div>
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
                <div
                  className={`${commonStyles.inputBox} ${formStyles.formItem}`}
                >
                  <input
                    type="text"
                    className={commonStyles.inputText}
                    placeholder="날씨는 어땠나요"
                    {...register("weather")}
                  ></input>
                </div>
                <div
                  className={`${commonStyles.inputGroup} ${formStyles.formItem}`}
                >
                  <div className={commonStyles.inputBox}>
                    <input
                      type="text"
                      className={commonStyles.inputText}
                      placeholder="누구와 함께였나요"
                      {...register("people")}
                    ></input>
                  </div>
                  <div className={commonStyles.checkBox}>
                    <input
                      type="checkbox"
                      className={commonStyles.inputCheck}
                      id="chk2"
                    />
                    <label
                      htmlFor="chk2"
                      className={commonStyles.inputCheckLabel}
                    >
                      <span className={commonStyles.inputCheckLabelText}>
                        혼자
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${formStyles.formBtnRow} ${formStyles.formRow}`}>
              <button
                type="submit"
                className={`${commonStyles.btn} ${commonStyles.btnSubmit}`}
              >
                게시하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
