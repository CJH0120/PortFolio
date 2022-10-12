import classNames from "classnames/bind"
import Styles from "@Style/MainItemBox.module.scss"

type MainItemBoxItem = {
   children: React.ReactNode
}

const MainItemBox = ({ children }: MainItemBoxItem) => {
   const cx = classNames.bind(Styles)

   return <div className={cx("Wrap")}>{children}</div>
}
export default MainItemBox
