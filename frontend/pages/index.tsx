import MainTopBox from "components/layouts/MainTopBox"
import classNames from "classnames/bind"
import Styles from "@Style/MainIndex.module.scss"
import type { NextPage } from "next"
import Image from "next/image"
import img from "@Public/img/defaultImg.png"
import React, { useState } from "react"
import { TextArea } from "components/control/TextArea"
import MainItemBox from "components/layouts/MainItemBox"
import SpanButton from "components/control/SpanButton"

const cx = classNames.bind(Styles)
const Home: NextPage = () => {
   const [Data, SetData] = useState([
      {
         User_Img: "/news/photo/202111/114654_220354.jpeg",
         User_Text: "김개발 입니다",
         User_MarkDown: "김개발 입니다",

         BtnValue: [
            { BtnValue: "Select1" },
            { BtnValue: "Select2" },
            { BtnValue: "Select1" },
            { BtnValue: "Select2" },
         ],
      },
   ])
   return (
      <div className={cx("Wrap")}>
         <div>
            <MainTopBox>
               {Data.map((v, idx) => {
                  return <UserInfo Data={v} key={idx} />
               })}
            </MainTopBox>
         </div>
         {/* //////////// */}

         <div>
            <div className={cx("BtnWrap")}>
               {Data.map((v, idx) => {
                  return <SpanButton Data={v.BtnValue} key={idx} />
               })}
            </div>
            <MainItemBox>asd</MainItemBox>
         </div>
      </div>
   )
}

export default Home

type UserInfoProps = {
   User_Img: string
   User_Text: string
   User_MarkDown: string
}
type UserInfoData = {
   Data: UserInfoProps
}
const UserInfo = ({ Data }: UserInfoData) => {
   const DefaultText: string = `작성한 코멘트가 없습니다`
   return (
      <div className={cx("User-Wrap")}>
         <div className={cx("User-Info")}>
            <div className={cx("User-Info-Photo")}>
               <Image
                  src={Data?.User_Img ? Data.User_Img : img}
                  alt="DefaultImg"
                  layout="fill"
               />
            </div>
            <div className={cx("User-Info-Text")}>
               <div>{Data?.User_Text ? Data.User_Text : DefaultText}</div>
            </div>
            <input
               type="file"
               name=""
               id=""
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e.currentTarget.files[0])
               }}
            />
         </div>
         <div className={cx("User-MarkDown")}>
            <TextArea Text={Data?.User_MarkDown} />
         </div>
      </div>
   )
}
