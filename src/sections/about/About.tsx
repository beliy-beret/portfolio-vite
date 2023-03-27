import { Avatar, Col, Row } from 'antd'

import { FC } from 'react'
import { Section } from '../../components/mySection/MySection'
import ava from '../../assets/images/ava.jpeg'
import classes from './about.module.css'

export const About: FC = () => {
  return (
    <Section id={'about'} sectionName={'about'} className={classes.about}>
      <Row align={'middle'} justify={'center'}>
        <Col span={10}>
          <p className={classes.description}>
            Hello!
            <br /> My name is <span className={classes.name}>Stanislav</span>.
            <br /> I{"'"}m Front-end developer.
          </p>
        </Col>
        <Col span={12}>
          <Avatar src={ava} size={{ xs: 180, sm: 300, md: 400, lg: 500, xl: 600, xxl: 600 }} />
        </Col>
      </Row>
    </Section>
  )
}
