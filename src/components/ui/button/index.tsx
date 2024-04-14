import classNames from "classnames"
import { ReactElement } from "react"

interface ButtonProps {
  children?: any
  variant?: string
  animation?: boolean
  onClick?: () => void
  icon?: ReactElement
}
const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "default",
    onClick,
    icon,
    animation = false,
  } = props
  return (
    <button
      onClick={onClick}
      className={classNames(
        "p-3 rounded-lg flex items-center justify-center gap-x-2 transition-all relative whitespace-nowrap",
        {
          "text-base-white bg-product-blue-light text-heading-xs hover:bg-product-blue-light/65":
            variant === "primary",
          "text-base-white bg-none  text-heading-xs": variant === "default",
        }
      )}
    >
      {icon && <span>{icon}</span>}
      {children && <span>{children}</span>}
      {animation && (
        <span className="absolute top-0 right-0 animate-ping  inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      )}
    </button>
  )
}

export default Button
