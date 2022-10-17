import { NickNamestore } from "store/Idstore"
import classNames from "classnames/bind"
import Styles from "@Style/Login.module.scss"
import { useState } from "react"
const User = () => {
   const { Nickname, setNickname } = NickNamestore()
   const cx = classNames.bind(Styles)
   const [isClick, setIsClick] = useState<boolean>(false)
   return (
      <div
         onClick={() => {
            setIsClick(!isClick)
         }}
         className={cx("User")}
      >
         <span>{Nickname}</span> 님{/*  */}
         {isClick && (
            <div
               className={cx("DropDown")}
               onClick={() => {
                  localStorage.clear()
                  window.location.reload()
               }}
            >
               로그아웃
            </div>
         )}
      </div>
   )
}
export default User
