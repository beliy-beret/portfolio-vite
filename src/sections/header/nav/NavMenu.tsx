import { FC } from 'react'
import classes from './navMenu.module.css'
import { scroller } from 'react-scroll'
import { useAppContext } from '../../../App'

export const NavMenu: FC = () => {
  const { activeSectionName } = useAppContext()
  const scrollOptions = {
    duration: 700,
    delay: 0,
    smooth: 'easeInOutQuart',
  }
  const scrollTo = {
    about: () => scroller.scrollTo('about', scrollOptions),
    skills: () => scroller.scrollTo('skills', scrollOptions),
    projects: () => scroller.scrollTo('projects', scrollOptions),
    contacts: () => scroller.scrollTo('contacts', scrollOptions),
  }
  return (
    <nav className={classes.nav}>
      <a className={activeSectionName === 'about' ? classes.active : ''} onClick={scrollTo.about}>
        About
      </a>
      <a className={activeSectionName === 'skills' ? classes.active : ''} onClick={scrollTo.skills}>
        Skills
      </a>
      <a
        className={activeSectionName === 'projects' ? classes.active : ''}
        onClick={scrollTo.projects}
      >
        Projects
      </a>
      <a
        className={activeSectionName === 'contacts' ? classes.active : ''}
        onClick={scrollTo.contacts}
      >
        Contacts
      </a>
    </nav>
  )
}
