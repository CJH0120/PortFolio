import classNames from "classnames/bind"
import Styles from "@Style/TextArea.module.scss"
import React, { KeyboardEvent, useState } from "react"
import handler from "pages/api/hello"
import { LoginStore } from "store/Idstore"

type TextAreaProps = {
   Text: string
}
export const TextArea = ({ Text }: TextAreaProps) => {
   const cx = classNames.bind(Styles)
   const { Login, setLogin } = LoginStore()

   const [areaValue, setAreaValue] = useState<string>(Text ? Text : "x")
   const [isClick, setIsClick] = useState<boolean>(false)
   const [change, setChange] = useState<boolean>(false)

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClick(!isClick)
   }
   return (
      <div className={cx("Wrap")}>
         <div className={cx("Wrap-sub")}>
            <div>
               <textarea
                  rows={2}
                  className={cx("TextArea", isClick ? "Act" : "NotAct")}
                  maxLength={352}
                  onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                     ;(e.code === `Enter` || e.code === `NumpadEnter`) &&
                        setAreaValue(e.currentTarget.value)
                  }}
                  onKeyUp={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                     setAreaValue(e.currentTarget.value)
                  }}
                  defaultValue={areaValue}
               />
            </div>
            <div className={cx(isClick ? "NotAct" : "Act", "ReadTextArea")}>
               {areaValue}
            </div>
         </div>
         {Login && (
            <button onClick={handleClick} className={cx("BTN")}>
               {isClick ? "저장하기" : "수정하기"}
            </button>
         )}
      </div>
   )
}
