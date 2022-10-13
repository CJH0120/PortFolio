import classNames from "classnames/bind"
import Styles from "@Style/MainIndex.module.scss"
import { TextArea } from "components/control/TextArea"
import { useState } from "react"
import Image from "next/image"
import img from "@Public/img/defaultImg.png"
const cx = classNames.bind(Styles)
export const Info = () => {
   const [Data, SetData] = useState([
      {
         User_Img: "/news/photo/202111/114654_220354.jpeg",
         User_Text: "김개발 입니다",
         User_MarkDown: "김개발 입니다",
      },
   ])

   return (
      <div className={cx("Content-Wrap")}>
         <div className={cx(`Wise-Saying`)}>
            <p className={cx(`Wise`)}>먼저 개척해라 그리고 고독해져라.</p>
            <p className={cx(`Saying`)}>ㅁㄴㅇㄴㅁㅇ</p>
         </div>
         <div className={cx("Content-Wrap-Item")}>
            {Data.map((v, idx) => {
               return <UserInfo Data={v} key={idx} />
            })}
         </div>
      </div>
   )
}

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
            <div>
               <div className={cx("User-Info-Photo")}>
                  <Image
                     src={Data?.User_Img ? Data.User_Img : img}
                     alt="DefaultImg"
                     layout="fill"
                  />
               </div>
               {/* <div className={cx("User-Info-Text")}>
                   <div>{Data?.User_Text ? Data.User_Text : DefaultText}</div>
                </div> */}
            </div>

            <div className={cx("User-Info-Intro")}>
               <div className={cx("User-Info-Intro-About-Me")}>About Me</div>
               <div className={cx("User-Info-Intro-About-Me-Contnet")}>
                  <div className={cx("User-Info-Intro-About-Me-Contnet-Name")}>
                     <span>이름</span>
                  </div>
                  <div className={cx("User-Info-Intro-About-Me-Contnet-Birth")}>
                     <span>생년월일</span>
                  </div>
                  <div
                     className={cx("User-Info-Intro-About-Me-Contnet-Locate")}
                  >
                     <span>주소</span>
                  </div>
                  <div className={cx("User-Info-Intro-About-Me-Contnet-Phone")}>
                     <span>핸드폰</span>asd
                  </div>
                  <div className={cx("User-Info-Intro-About-Me-Contnet-Email")}>
                     <span>이메일</span>
                  </div>
                  <div
                     className={cx("User-Info-Intro-About-Me-Contnet-School")}
                  >
                     <span>학력</span>
                  </div>
               </div>
            </div>
         </div>
         <div className={cx("User-MarkDown")}>
            <TextArea Text={Data?.User_MarkDown} />
         </div>
      </div>
   )
}
