import { Avatar, Col, Row } from 'antd'

import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Section } from '../../components/mySection/MySection'
import ava from '../../assets/images/ava.jpeg'
import classes from './about.module.css'

export const About: FC = () => {
  return (
    <Section id={'about'} sectionName={'about'} className={classes.about}>
      <Row align={'middle'} justify={'center'}>
        <Col span={10}>
          <p className={classes.description}>
            <Fade duration={300} direction={'left'} cascade>
              <span>Hello!</span>
              <span>My name is</span>
              <span className={classes.name}>Stanislav</span>.
              <span>I{"'"}m Front-end developer.</span>
            </Fade>
          </p>
        </Col>
        <Col span={12}>
          <Avatar src={ava} size={{ xs: 180, sm: 300, md: 400, lg: 500, xl: 600, xxl: 600 }} />
        </Col>
      </Row>
    </Section>
  )
}
