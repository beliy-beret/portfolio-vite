import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { ProjectCard } from './projectCard/ProjectCard'
import { Section } from '../../components/mySection/MySection'
import Slider from 'react-slick'
import { Title } from '../../components/title/Title'
import classes from './projects.module.css'
import { projectList } from './projectList'

export const Projects: FC = () => {
  const projects = projectList.map((el) => (
    <ProjectCard
      key={el.id}
      description={el.description}
      screenShot={el.screenShot}
      title={el.title}
      url={el.url}
      demo={el.demo}
    />
  ))
  const settings = {
    swipeToSlide: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <Section sectionName='projects' id={'projects'} className={classes.projects}>
      <Title>My projects:</Title>
      <div className={classes.carousel}>
        <Fade delay={300}>
          <Slider {...settings} className={classes.carousel}>
            {projects}
          </Slider>
        </Fade>
      </div>
    </Section>
  )
}
