import type { NextPage } from "next"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import dynamic from "next/dynamic"
import { useState } from "react"
import classNames from "classnames/bind"
import Styles from "@Style/Markdown.module.scss"
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
   ssr: false,
})
const MarkDown: NextPage = () => {
   const cx = classNames.bind(Styles)

   const [islogin, setIsLogin] = useState<boolean>(true)
   const [md, setMd] = useState<string | undefined>("# Hello World")
   const [setting, setSetting] = useState<boolean>(false)
   return (
      <div className={cx("Wrap")}>
         <div>
            <MDEditor
               value={md}
               onChange={setMd}
               height={500}
               enableScroll={true}
               preview={setting ? "edit" : "preview"}
               hideToolbar={setting ? false : true}
               style={{
                  background: "#11ffee00",
                  height: "2000px !important",
                  fontSize: "60px !important",
                  lineHeight: "20px !important",
               }}
               tabSize={3}
               maxHeight={500}
               minHeight={500}
            />
         </div>
         {islogin && (
            <button
               onClick={() => {
                  setSetting(!setting)
               }}
               className={cx("btn")}
            >
               수정하기
            </button>
         )}
      </div>
   )
}

export default MarkDown
