import classNames from "classnames/bind"
import Styles from "@Style/ReviseBox.module.scss"
import {
   KeyboardEvent,
   KeyboardEventHandler,
   LegacyRef,
   useEffect,
   useRef,
   useState,
} from "react"
import React from "react"

import Link from "next/link"
import { LoginStore, NickNamestore } from "store/Idstore"
import { useRouter } from "next/router"
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
      const [isClick, setIsClick] = useState<boolean>(true)
      const { Nickname } = NickNamestore()

      const [textVal, setTextVal] = useState<string>(
         Text === "" || !Text ? "Default" : Text
      )
      const { Login, setLogin } = LoginStore()
      const [href, setHref] = useState<string>("/")
      const OriginName = Text
      useEffect(() => {
         switch (FieldType) {
            case "Title_Logo":
               setHref("/")
               break
            default:
               setHref("/TTTT")
         }
      }, [FieldType])

      const ChangeHandler = (e: React.MouseEvent) => {
         fetch("api/Categorie", {
            method: "POST",
            headers: {
               Accept: "application.json",
               "Content-Type": "application/json",
               nickname: Nickname!,
               authorization: window.localStorage.getItem("Authorization")!,
            },
            body: JSON.stringify({
               key: FieldType,
               value: textVal,
            }),
         }).then((res) => {
            if (!res.ok) {
               alert("새로고침하면 초기화됩니다")
               setIsChange(!isChange)
               setIsClick(true)
               if (textVal === "") {
                  setTextVal("Default")
               }
            } else {
               setIsClick(true)
               setIsChange(!isChange)
               if (textVal === "") {
                  setTextVal("Default")
               }
            }
         })
      }
      return (
         <div className={cx("Wrap")} onClick={handleClick}>
            <div className={cx("Btn-Text")}>
               <Link href={href}>
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
                  maxLength={7}
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
                  {isClick ? (
                     <button
                        onClick={() => {
                           setIsChange(!isChange)
                           setIsClick(false)
                        }}
                     >
                        수정하기
                     </button>
                  ) : (
                     <div>
                        <button
                           onClick={() => {
                              setIsClick(true)
                              setTextVal(OriginName ? OriginName : "Default")
                              setIsChange(!isChange)
                           }}
                        >
                           취소
                        </button>

                        <button
                           onClick={(e) => {
                              ChangeHandler(e)
                           }}
                        >
                           변경
                        </button>
                     </div>
                  )}
               </div>
            )}
         </div>
      )
   }
)

export default ReviseBox
