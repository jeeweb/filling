"use client";

import Image from "next/image";
import { useState, useRef, ChangeEventHandler } from "react";
import SmallButton from "@/app/_component/elements/SmallButton";
import * as formStyles from "@/app/post/postForm.css";

export default function ImagePreview() {
  const [imgPreview, setImgPreview] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  const uploadImg = () => {
    imageRef.current?.click();
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
  // useEffect(() => {
  //   console.log(watch("image"), typeof watch("image"));
  //   if (watch("image") && watch("image").length > 0) {
  //     const file = watch("image")[0];
  //     setImgPreview(URL.createObjectURL(file));
  //   }
  // }, [watch("image")]);

  return (
    <>
      <div className={formStyles.imgBox}>
        {imgPreview ? (
          <Image src={imgPreview} alt="" fill={true} priority />
        ) : null}
      </div>
      <div>
        <SmallButton value={"사진첨부"} onClick={uploadImg} />
        <input
          type="file"
          name="imageFiles"
          accept="image/*"
          hidden
          ref={imageRef}
          onChange={loadImgPreview}
        />
      </div>
    </>

    // <>
    //   <div className={formStyles.imgBox}>
    //     {imgPreview ? (
    //       <Image src={imgPreview} alt="" fill={true} priority />
    //     ) : null}
    //   </div>
    //   <div>
    //     {/* <SmallButton value={"사진첨부"} onClick={uploadImg}/> */}
    //     <input
    //       type="file"
    //       accept="image/*"
    //       //hidden
    //       {...register("image", { required: true })}
    //     />
    //   </div>
    // </>
  );
}
