import { Fade } from 'react-awesome-reveal'
import { Section } from '../../components/mySection/MySection'
import { Title } from '../../components/title/Title'
import classes from './mySkills.module.css'
import { skillsImages } from '../../assets/images/skills/images'

export const MySkills = () => {
  return (
    <Section sectionName='skills' id='skills' className={classes.skills}>
      <Title>Work with:</Title>
      <Fade delay={400}>
        <div className={classes.imgList}>
          <img src={skillsImages.htmlIcon} alt={'HTML'} />
          <img src={skillsImages.cssIcon} alt={'CSS / SCSS'} />
          <img src={skillsImages.jsIcon} alt={'JavaScript'} />
          <img src={skillsImages.tsIcon} alt={'TypeScript'} />
          <img src={skillsImages.reactIcon} alt={'React'} />
          <img src={skillsImages.reduxIcon} alt={'Redux'} />
          <img src={skillsImages.jestIcon} alt={'Jest'} />
          <img src={skillsImages.storybookIcon} alt={'Storybook'} />
          <img src={skillsImages.webpackIcon} alt={'Webpack'} />
          <img src={skillsImages.dockerIcon} alt={'docker'} />
        </div>
      </Fade>
    </Section>
  )
}
