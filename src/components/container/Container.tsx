import { FC, ReactNode } from 'react'

import classes from './container.module.css'

type ComponentProps = {
  children: ReactNode
  className?: string
}

export const Container: FC<ComponentProps> = ({ children, className = '' }) => {
  const boxClass = classes.box + ' ' + className

  return <div className={boxClass}>{children}</div>
}
