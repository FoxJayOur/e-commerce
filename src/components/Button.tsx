import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    color?: string;
    onClick: () => void;
}

const Button = ({children, color = 'primary', onClick}: ButtonProps) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button