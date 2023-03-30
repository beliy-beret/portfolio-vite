import { Container } from '../../components/container/Container'
import { FC } from 'react'
import classes from './footer.module.css'

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <h2 className={classes.title}>Stanislav U. Skorobogatov</h2>
      </Container>
    </footer>
  )
}
