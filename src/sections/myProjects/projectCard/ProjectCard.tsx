import { Divider, Space } from 'antd'

import { FC } from 'react'
import { ProjectType } from '../projectList'
import classes from './projectCard.module.css'

type ComponentPropsType = Omit<ProjectType, 'id'>

export const ProjectCard: FC<ComponentPropsType> = ({
  screenShot,
  title,
  url,
  description,
  demo,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardImg}>
        <img src={screenShot} alt='project' />
      </div>
      <div className={classes.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.cardActions}>
        <Space size={50} split={<Divider type='vertical' style={{ borderColor: 'black' }} />}>
          <a href={url} target='_blank' rel='noreferrer'>
            Code
          </a>
          <a href={demo} target='_blank' rel='noreferrer'>
            Demo
          </a>
        </Space>
      </div>
    </div>
  )
}
