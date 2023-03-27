import { Container } from '../../components/container/Container'
import { FC } from 'react'
import { NavMenu } from './nav/NavMenu'
import classes from './header.module.css'

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <NavMenu />
      </Container>
    </header>
  )
}
