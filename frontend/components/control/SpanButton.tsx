import classNames from "classnames/bind"
import Styles from "@Style/SpanButton.module.scss"
const cx = classNames.bind(Styles)

type SpanButtonProps = {
   BtnValue: string
}

type SpanButtonData = {
   Data: SpanButtonProps
   children: React.ReactNode
}

const SpanButton = ({ Data, children }: SpanButtonData) => {
   return (
      <button className={cx("Btn-Wrap")}>
         <span>{Data.BtnValue}</span>
      </button>
   )
}
export default SpanButton
