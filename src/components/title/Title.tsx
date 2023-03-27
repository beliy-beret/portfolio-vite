import { FC, ReactNode } from 'react'

import classes from './title.module.css'

type ComponentPropsType = {
  children: ReactNode
  className?: string
}

export const Title: FC<ComponentPropsType> = ({ className = '', children }) => {
  return <h2 className={classes.title + ' ' + className}>{children}</h2>
}
