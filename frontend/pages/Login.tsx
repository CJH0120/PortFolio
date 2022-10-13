import classNames from "classnames/bind"
import Styles from "@Style/Login.module.scss"
import { KeyboardEventHandler, useState } from "react"

type LoginProps = {
   onClick?: () => any
}
export const Login = ({ onClick }: LoginProps) => {
   const [userId, setUserId] = useState<string>("")
   const [userPw, setUserPw] = useState<string>("")

   console.log(userId)
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
                     onClick={() => {
                        fetch("/api/User/Join", {
                           method: "POST",
                           headers: {
                              "Content-Type": "application/json",
                           },
                           body: JSON.stringify({
                              UserId: userId,
                              userPw: userPw,
                           }),
                        }).then((response) => console.log(response))
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
