import classNames from "classnames/bind"
import Styles from "@Style/MainTopBox.module.scss"
import { ReactNode } from "react"
type MainTopBoxProps = {
   children?: ReactNode
}

const MainTopBox = ({ children }: MainTopBoxProps) => {
   const cx = classNames.bind(Styles)

   return <div className={cx("Main-Wrap")}>{children}</div>
}

export default MainTopBox
