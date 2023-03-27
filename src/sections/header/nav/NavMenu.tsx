import { FC } from 'react'
import classes from './navMenu.module.css'
import { useAppContext } from '../../../App'

export const NavMenu: FC = () => {
  const { activeSectionName } = useAppContext()
  return (
    <nav className={classes.nav}>
      <a href='#about' className={activeSectionName === 'about' ? classes.active : ''}>
        About
      </a>
      <a href='#skills' className={activeSectionName === 'skills' ? classes.active : ''}>
        Skills
      </a>
      <a href='#projects' className={activeSectionName === 'projects' ? classes.active : ''}>
        Projects
      </a>
      <a href='#contacts' className={activeSectionName === 'contacts' ? classes.active : ''}>
        Contacts
      </a>
    </nav>
  )
}
