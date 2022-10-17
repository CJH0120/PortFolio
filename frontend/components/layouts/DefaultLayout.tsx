import classNames from "classnames/bind"
import Styles from "@Style/DefaultLayout.module.scss"
import React, { useState } from "react"
import ReviseBox from "components/control/ReviseBox"
import {  LoginPage } from "components/control/Login"
import { LoginStore, NickNamestore } from "store/Idstore"

interface DefaultLayoutProps {
   children: React.ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
   const cx = classNames.bind(Styles)
   const [islogin, setIsLogin] = useState<boolean>(false)
   const { Login, setLogin } = LoginStore()
   const { Nickname } = NickNamestore()
   return (
      <div className={cx("Wrap")}>
         <div className={cx("Contain")}>
            <div className={cx("HeaderItem")}>
               <div className={cx("HeaderItem-Logo")}>
                  <ReviseBox FieldType="/" size="Medium" bolder="bolde" />
               </div>

               <div className={cx("Header-SubWrap")}>
                  <div className={cx("HeaderItem-Categories")}>
                     <ReviseBox
                        FieldType="/Category/One"
                        size="Small"
                        bolder="light"
                     />

                     <ReviseBox
                        FieldType="/Category/Two"
                        size="Small"
                        bolder="light"
                     />

                     <ReviseBox
                        FieldType="/Category/Three"
                        size="Small"
                        bolder="light"
                     />

                     <ReviseBox
                        FieldType="/Category/Four"
                        size="Small"
                        bolder="light"
                     />
                  </div>
                  <div
                     className={cx("HeaderItem-Login")}
                     onClick={() => {
                        setIsLogin(true)
                     }}
                  >
                     {Login ? (
                        <button>{Nickname}</button>
                     ) : (
                        <button>Login</button>
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
