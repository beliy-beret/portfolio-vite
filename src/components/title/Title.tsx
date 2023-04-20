import { FC, ReactNode } from 'react'

import { Typography } from 'antd'
import classes from './title.module.css'

type ComponentPropsType = {
  children: ReactNode
  className?: string
}

export const Title: FC<ComponentPropsType> = ({ className = '', children }) => {
  return (
    <Typography.Title level={2} className={classes.title + ' ' + className}>
      {children}
    </Typography.Title>
  )
}
