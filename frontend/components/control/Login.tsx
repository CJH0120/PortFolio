import classNames from "classnames/bind"
import Styles from "@Style/Login.module.scss"
import { KeyboardEventHandler, useState } from "react"
import { error } from "console"

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
                        fetch("/Join", {
                           method: "POST",
                           headers: {
                              "Content-Type": "application/json",
                           },
                           body: JSON.stringify({
                              User_Id: userId,
                              User_Pw: userPw,
                           }),
                        })
                           .then((res) => {
                              //fetch를 통해 받아온 res객체 안에
                              //ok 프로퍼티가 있음
                              if (!res.ok) {
                                 throw res.text
                              }
                              return res.json()
                           })
                           .then((data) => console.log(data))
                           .catch((err) => {
                              console.log(err)
                           })
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

const SuccessBox = () => {
   return <div>회원가입 성공</div>
}
const ErrBox = () => {
   return <div>이미 가입된 아이디가 있습니다</div>
}
