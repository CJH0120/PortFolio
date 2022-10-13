import classNames from "classnames/bind"
import Styles from "@Style/CategoriesButton.module.scss"
import React from "react"

type CategoriesButtonProps = {
   CategoriesName: string
   CategoriesNum: number
}

type CategoriesButtonData = {
   Idx: number
   Data: CategoriesButtonProps
   className?: string
   onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & React.DetailedHTMLProps<
   React.ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
>

const CategoriesButton = React.forwardRef(
   (
      {
         Data,
         className,
         Idx,
         onClick: handleClick = () => {},
         ...props
      }: CategoriesButtonData,
      ref: React.LegacyRef<HTMLButtonElement>
   ) => {
      const cx = classNames.bind(Styles)
      return (
         <button
            ref={ref}
            className={cx("Wrap", Idx === Data.CategoriesNum ? "act" : "")}
            onClick={handleClick}
            {...props}
         >
            <span>{Data?.CategoriesName}</span>
         </button>
      )
   }
)
export default CategoriesButton
