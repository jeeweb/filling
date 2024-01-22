"use client";

import Image from "next/image";
import { useRef, FormEventHandler, useState, ChangeEventHandler } from "react";
import * as formStyles from "./postForm.css";
import * as commonStyles from "@/app/common.css";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitForm: FormEventHandler = (event) => {
    event.preventDefault();
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
              >
                <option>주종</option>
              </select>
              <select
                name="type"
                id="selecType"
                className={commonStyles.selectBox}
              >
                <option>종류</option>
              </select>
              <select
                name="country"
                id="selectCountry"
                className={commonStyles.selectBox}
              >
                <option>생산지</option>
              </select>
              <div className={commonStyles.inputBox}>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="브랜드명/상품명"
                ></input>
              </div>
              <div className={commonStyles.inputBox}>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="등급"
                ></input>
              </div>
              <div className={commonStyles.inputBox}>
                <input
                  type="text"
                  className={commonStyles.inputText}
                  placeholder="생산지"
                ></input>
              </div>
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
