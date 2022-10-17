import classNames from "classnames/bind"
import Styles from "@Style/Login.module.scss"
import { useState } from "react"
import { error } from "console"
import { LoginStore, NickNamestore } from "store/Idstore"

type LoginProps = {
   onClick?: () => any
}
export const LoginPage = ({ onClick }: LoginProps) => {
   const { Login, setLogin } = LoginStore()
   const [userId, setUserId] = useState<string>("")
   const [userPw, setUserPw] = useState<string>("")
   const { Nickname, setNickname } = NickNamestore()
   const LoginHandler = () => {
      fetch(`/api/auth/Login`, {
         method: "POST",
         headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            User_Id: userId,
            User_Pw: userPw,
         }),
      })
         .then((response) => {
            if (!response.ok) {
               return response.text().then((response) => {
                  throw new Error(response)
               })
            }
            return response
         })
         .then((res) => {
            let Token = res?.headers?.get("cookies")
            let Nick = res?.headers?.get("is_login")
            localStorage.setItem("Authorization", Token!!)
            localStorage.setItem("nickname", Nick!)
            setNickname(Nick!)
            setLogin(true)
         })
         .then(onClick)
         .catch((err) => {
            console.log("caught it!", err)
         })
   }

   const cx = classNames.bind(Styles)
   return (
      <div className={cx("Wrap")}>
         <div className={cx("Login-Content")}>
            <div className={cx("Wrap-Exit")} onClick={onClick}>
               X
            </div>
            <div className={cx("Login-Content-Top")}></div>

            <div className={cx("Login-Content-Main")}>
               <div className={cx("Login-Content-Id")}>
                  <input
                     type="text"
                     className={cx("Login-Content-Id-input")}
                     onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        setUserId(e.currentTarget.value)
                     }}
                  />
               </div>
               <div className={cx("Login-Content-PW")}>
                  <input
                     type="password"
                     name=""
                     id=""
                     onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        setUserPw(e.currentTarget.value)
                     }}
                  />
               </div>
               <div>
                  <input
                     type="submit"
                     name=""
                     id=""
                     className={cx("Login-Content-submit")}
                     onClick={LoginHandler}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
