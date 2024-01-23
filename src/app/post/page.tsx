"use client";

import Image from "next/image";
import {
  useState,
  useRef,
  Fragment,
  FormEventHandler,
  ChangeEventHandler,
  useEffect,
} from "react";
import * as formStyles from "./postForm.css";
import * as commonStyles from "@/app/common.css";
import { useQuery } from "@tanstack/react-query";
import { IDrink } from "@/types/Drink";

const selectList1 = [
  { value: "default", name: "주종" },
  { value: "d01", name: "소주" },
  { value: "d02", name: "맥주" },
];

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState("");
  const [drink, setDrink] = useState("주종");
  const [drinkTypeList, setDrinkTypeList] = useState<string[]>([]);
  const [countryList, setCountryList] = useState<string[]>([]);
  const [drinkType, setDrinkType] = useState("종류");
  const [country, setCountry] = useState("생산지");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: drinks, error } = useQuery<IDrink[]>({
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

  const handleDrinkSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setDrink(event.target.value);
  };

  const handleDrinkTypeSelect: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setDrinkType(event.target.value);
  };

  useEffect(() => {
    if (drink === "d05" || drink === "d06") {
      setDrinkTypeList(
        drinks?.find((item: IDrink) => item.drinkId === drink)
          ?.types as string[]
      );
      setCountryList(
        drinks?.find((item: IDrink) => item.drinkId === drink)
          ?.country as string[]
      );
    }
  }, [drink, drinks]);

  const controlSelect = () => {};
  const showMoreInput = () => {
    switch (drink) {
      case "d02":
      case "d07":
      case "d08":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
              ></input>
            </div>
          </>
        );
      case "d03":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="양조장"
              ></input>
            </div>
          </>
        );
      case "d05":
      case "d06":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="빈티지/숙성연도"
              ></input>
            </div>
          </>
        );
      case "d09":
      case "d10":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="종류/등급"
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
              ></input>
            </div>
          </>
        );
      case "d11":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="베이스"
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="사용재료"
              ></input>
            </div>
          </>
        );
      case "d12":
        return (
          <>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="주종"
              ></input>
            </div>
            <div className={commonStyles.inputBox}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="생산지"
              ></input>
            </div>
          </>
        );
    }
  };

  const loadImgPreview: ChangeEventHandler<HTMLInputElement> = () => {
    const file = imageRef.current?.files;
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        setImgPreview(reader.result as string);
      };
    }
  };

  const submitForm: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const uploadImg = () => {
    imageRef.current?.click();
  };

  const openMap = () => {};

  return (
    <div className={commonStyles.inner}>
      <div className={formStyles.formBox}>
        <form className={formStyles.formRowGroup} onSubmit={submitForm}>
          <div
            className={`${commonStyles.scrollWrap} ${commonStyles.formScrollWrap}`}
          >
            <div className={`${formStyles.formImgRow} ${formStyles.formRow}`}>
              <div className={formStyles.imgBox}>
                {imgPreview ? (
                  <Image src={imgPreview} alt="" fill={true} priority />
                ) : (
                  ""
                )}
              </div>
              <div>
                <button
                  className={`${commonStyles.btn} ${commonStyles.btnSmall}`}
                  type="button"
                  onClick={uploadImg}
                >
                  사진첨부
                </button>
                <input
                  type="file"
                  name="imageFiles"
                  accept="image/*"
                  hidden
                  ref={imageRef}
                  onChange={loadImgPreview}
                />
              </div>
            </div>
            <div className={`${commonStyles.inputGroup} ${formStyles.formRow}`}>
              <select
                name="drink"
                id="selectDrink"
                className={commonStyles.selectBox}
                onChange={handleDrinkSelect}
                value={drink}
              >
                {drinks?.map((drink) => {
                  return (
                    <option value={drink.drinkId} key={drink.drinkId}>
                      {drink.category}
                    </option>
                  );
                })}
              </select>
              {drink === "d05" || drink === "d06" ? (
                <>
                  <select
                    name="type"
                    id="selecType"
                    className={commonStyles.selectBox}
                    onChange={handleDrinkTypeSelect}
                    value={drinkType}
                  >
                    {drinkTypeList?.map((type, idx) => {
                      return (
                        <option value={type} key={idx}>
                          {type}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    name="country"
                    id="selectCountry"
                    className={commonStyles.selectBox}
                    value={country}
                  >
                    {countryList?.map((country, idx) => {
                      return (
                        <option value={country} key={idx}>
                          {country}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : (
                ""
              )}
              <div className={commonStyles.inputBox}>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="브랜드명/상품명"
                ></input>
              </div>
              {showMoreInput()}
            </div>
            <div className={`${commonStyles.inputBox} ${formStyles.formRow}`}>
              <input
                type="text"
                className={commonStyles.inputText}
                placeholder="제목을 입력하세요"
              ></input>
            </div>
            <div
              className={`${commonStyles.inputBox} ${formStyles.formRow}`}
              style={{ marginTop: "8px" }}
            >
              <textarea
                className={commonStyles.textarea}
                placeholder="기억하고 싶은 순간을 기록하세요"
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
                    <span className={commonStyles.inputCheckLabelText}>집</span>
                  </label>
                </div>
                <button
                  className={`${commonStyles.btn} ${commonStyles.btnSmall}`}
                  type="button"
                  onClick={openMap}
                >
                  지도에서 찾기
                </button>
              </div>
              <div
                className={`${commonStyles.inputBox} ${formStyles.formItem}`}
              >
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="어떤 음식과 함께였나요"
                ></input>
              </div>
            </div>
            <div className={formStyles.formRow}>
              <div
                className={`${commonStyles.inputBox} ${formStyles.formItem}`}
              >
                <button
                  className={`${commonStyles.btnIcon} ${commonStyles.btnCalendar}`}
                  type="button"
                  onClick={openMap}
                ></button>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="YYYY.MM.DD"
                  readOnly
                ></input>
              </div>
              <div
                className={`${commonStyles.inputBox} ${formStyles.formItem}`}
              >
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="날씨는 어땠나요"
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
              className={`${commonStyles.btn} ${commonStyles.btnSubmit}`}
              disabled={!content}
            >
              게시하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
