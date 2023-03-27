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
        <a href={url} target='_blank' rel='noreferrer'>
          Go to project
        </a>
        <a href={demo} target='_blank' rel='noreferrer'>
          Demo
        </a>
      </div>
    </div>
  )
}
