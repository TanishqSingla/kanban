import { FC, HTMLProps } from "react"
import classes from './Layout.module.css'

interface Props extends HTMLProps<HTMLDivElement> {
  children: string | JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className={classes.Layout}>
      {children}
  </div>
}