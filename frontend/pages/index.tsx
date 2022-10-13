import classNames from "classnames/bind"
import Styles from "@Style/MainIndex.module.scss"
import type { NextPage } from "next"
import React, { useState } from "react"
import CategoriesButton from "components/control/CategoriesButton"
import { Info } from "./Info"
import { Login } from "./Login"

const cx = classNames.bind(Styles)
const Home: NextPage = () => {
   const [IsClick, setIsClick] = useState<number>(0)
   const Click = (Index: number) => {
      setIsClick(Index)
      fetch(`/api/hello`)
         .then((res) => res.json())
         .then((res) => console.log(res))
   }
   const [islogin, setIsLogin] = useState<boolean>(false)
   const [MenuData, setMenuData] = useState([
      {
         CategoriesName: "Intro",
         CategoriesNum: 0,
      },
      {
         CategoriesName: "Skills",
         CategoriesNum: 1,
      },
      {
         CategoriesName: "Archiving",
         CategoriesNum: 2,
      },
      {
         CategoriesName: "Project",
         CategoriesNum: 3,
      },
   ])

   return (
      <div className={cx("Wrap")}>
         <div className={cx("Contain")}>
            <div className={cx("HeaderItem")}>
               <div className={cx("HeaderItem-Logo")}></div>
               <div className={cx("HeaderItem-Categories")}>
                  {MenuData.map((v: any, idx: number) => {
                     return (
                        <CategoriesButton
                           Data={v}
                           key={idx}
                           Idx={IsClick}
                           onClick={() => {
                              Click(idx)
                           }}
                        />
                     )
                  })}
               </div>
               <div
                  className={cx("HeaderItem-Login")}
                  onClick={() => {
                     setIsLogin(true)
                  }}
               >
                  {" "}
                  로그인
               </div>
            </div>
            <div className={cx("UIUX")}>
               <div className={cx("UIUX-2")} />
            </div>
            <div className={cx("UIUX-middle")} />
            {/* 꾸미는 영역 */}

            <Info />

            {/* 꾸미는 영역 */}

            <div className={cx("Footer")}>
               <div className={cx("UIUX-2")} />
            </div>
         </div>
         {islogin && (
            <Login
               onClick={() => {
                  setIsLogin(false)
               }}
            />
         )}
      </div>
   )
}

export default Home
