import classNames from "classnames/bind"
import Styles from "@Style/Info.module.scss"
import { TextArea } from "components/control/TextArea"
import { useState } from "react"
import Image from "next/image"
import img from "@Public/img/defaultImg.png"
import MarkDown from "components/control/MarkDown"
const cx = classNames.bind(Styles)

type UserInfoProps = {
   User_Img: string
   User_Text: string
   User_MarkDown: string
}
type UserInfoData = {
   Data: UserInfoProps
}
export const Info = ({ Data }: UserInfoData) => {
   const [Datas, SetData] = useState([
      {
         User_Img: "/news/photo/202111/114654_220354.jpeg",
         User_Text: "김개발 입니다",
         User_MarkDown: "김개발 입니다",
      },
   ])

   return (
      <div className={cx("Content-Wrap")}>
         <div className={cx("Content-Wrap-Left")}>
            <MarkDown />
         </div>
         <div className={cx("Content-Wrap-Right")}>
            <div className={cx("User-Info-Photo")}>
               <Image
                  src={Data?.User_Img ? Data.User_Img : img}
                  alt="DefaultImg"
                  layout="intrinsic"
                  height={400}
               />
            </div>
            <div className={cx("User-MarkDown")}>
               <TextArea Text={Data?.User_MarkDown} />
            </div>
         </div>
      </div>
   )
}

const UserInfo = ({ Data }: UserInfoData) => {
   const DefaultText: string = `작성한 코멘트가 없습니다`
   return (
      <div className={cx("User-Wrap")}>
         <div className={cx("User-Info")}>
            <div>
               <div className={cx("User-Info-Text")}>
                  <div>{Data?.User_Text ? Data.User_Text : DefaultText}</div>
               </div>
            </div>
         </div>
         <div className={cx("User-MarkDown")}>
            <TextArea Text={Data?.User_MarkDown} />
         </div>
      </div>
   )
}
