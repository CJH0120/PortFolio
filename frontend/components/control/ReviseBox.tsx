import classNames from "classnames/bind"
import Styles from "@Style/ReviseBox.module.scss"
import {
   KeyboardEvent,
   KeyboardEventHandler,
   LegacyRef,
   useRef,
   useState,
} from "react"
import React from "react"

import Link from "next/link"
import { LoginStore } from "store/Idstore"
interface ReviseBoxProps {
   FieldType: string
   Text?: string
   size: "Medium" | "Small"
   bolder?: "bolde" | "light"
   onclick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const ReviseBox = React.forwardRef(
   (
      {
         FieldType,
         Text,
         size = "Small",
         bolder = "light",
         onclick: handleClick = () => {},
      }: ReviseBoxProps,
      ref
   ) => {
      const cx = classNames.bind(Styles)
      const [isChange, setIsChange] = useState<boolean>(false)
      const [textVal, setTextVal] = useState<string>(!Text ? "Default" : Text!)
      const { Login, setLogin } = LoginStore()
      return (
         <div className={cx("Wrap")} onClick={handleClick}>
            <div className={cx("Btn-Text")}>
               <Link href={FieldType}>
                  <a>
                     <button
                        className={cx(bolder, size, isChange && "Not_Active")}
                     >
                        {textVal}
                     </button>
                  </a>
               </Link>
               <textarea
                  className={cx(!isChange && "Not_Active", "textarea", size)}
                  defaultValue={textVal}
                  maxLength={9}
                  onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                     if (e.code === `NumpadEnter` || e.code === `Enter`) {
                        alert("엔터키를 사용할수 없습니다!")
                        return false
                     }
                  }}
                  onKeyUp={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                     setTextVal(e.currentTarget.value)
                  }}
               />
            </div>

            {Login && (
               <div
                  className={cx(
                     "Revise",
                     size === "Medium" ? "medium" : "small"
                  )}
               >
                  <button
                     onClick={() => {
                        setIsChange(!isChange)
                     }}
                  >
                     수정하기
                  </button>
               </div>
            )}
         </div>
      )
   }
)

export default ReviseBox
