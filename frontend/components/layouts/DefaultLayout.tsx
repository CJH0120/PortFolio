import classNames from "classnames/bind"
import Styles from "@Style/DefaultLayout.module.scss"
import React, { useEffect, useState } from "react"
import ReviseBox from "components/control/ReviseBox"
import { LoginPage } from "components/control/Login"
import { LoginStore, LogoTitleStore, NickNamestore } from "store/Idstore"
import User from "./User"
interface DefaultLayoutData {
   Title_Logo: string
   Title_1: string
   Title_2: string
   Title_3: string
   Title_4: string
}
interface DefaultLayoutProps {
   children?: React.ReactNode
   Data: DefaultLayoutData
}
const DefaultLayout = ({ children, Data }: DefaultLayoutProps) => {
   const cx = classNames.bind(Styles)
   const [islogin, setIsLogin] = useState<boolean>(false)
   const { Login, setLogin } = LoginStore()
   const { Nickname, setNickname } = NickNamestore()
   const { LogoTitle, setLogoTitle } = LogoTitleStore()
   useEffect(() => {
      let nick = localStorage.getItem("nickname")
      let Authorization = localStorage.getItem("Authorization")
      let Decod = decodeURIComponent(nick!)
      if (nick !== null && Authorization !== null) {
         setNickname(Decod)
         setLogin(true)
      } else {
         setLogin(false)
      }
   }, [])

   const [Datas, setData] = useState<any>({})

   return (
      <div className={cx("Wrap")}>
         <div className={cx("Contain")}>
            <div className={cx("HeaderItem")}>
               <div className={cx("HeaderItem-Logo")}>
                  <ReviseBox
                     FieldType="Title_Logo"
                     size="Medium"
                     bolder="bolde"
                     Text={Data?.Title_Logo}
                  />
               </div>

               <div className={cx("Header-SubWrap")}>
                  <div className={cx("HeaderItem-Categories")}>
                     <ReviseBox
                        FieldType="Title_1"
                        size="Small"
                        bolder="light"
                        Text={Data?.Title_1}
                     />

                     <ReviseBox
                        FieldType="Title_2"
                        size="Small"
                        bolder="light"
                        Text={Data?.Title_2}
                     />

                     <ReviseBox
                        FieldType="Title_3"
                        size="Small"
                        bolder="light"
                        Text={Data?.Title_3}
                     />

                     <ReviseBox
                        FieldType="Title_4"
                        size="Small"
                        bolder="light"
                        Text={Data?.Title_4}
                     />
                  </div>
                  <div className={cx("HeaderItem-Login")}>
                     {Login ? (
                        <User />
                     ) : (
                        <button
                           onClick={() => {
                              setIsLogin(true)
                           }}
                        >
                           Login
                        </button>
                     )}
                  </div>
               </div>
            </div>

            {/* 꾸미는 영역 */}
            <div className={cx("Main-Item")}>{children}</div>
            {/* <Info /> */}

            {/* 꾸미는 영역 */}
         </div>
         {islogin && (
            <LoginPage
               onClick={() => {
                  setIsLogin(false)
               }}
            />
         )}
      </div>
   )
}

export default DefaultLayout
