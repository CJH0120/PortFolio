import classNames from "classnames/bind"
import Styles from "@Style/TextArea.module.scss"
import React, { KeyboardEvent, useState } from "react"
import handler from "pages/api/hello"

type TextAreaProps = {
   Text: string
}
export const TextArea = ({ Text }: TextAreaProps) => {
   const cx = classNames.bind(Styles)
   const [areaValue, setAreaValue] = useState<string>(
      Text ? Text : "작성된 코멘트가 없습니다"
   )
   const [isClick, setIsClick] = useState<boolean>(true)
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
         <button onClick={handleClick} className={cx("BTN")}>
            {isClick ? "수정하기" : "저장하기"}
         </button>
      </div>
   )
}
