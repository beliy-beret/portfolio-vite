import { Container } from '../../components/container/Container'
import { FC } from 'react'
import classes from './footer.module.css'
import { contactsIcons } from '../../assets/images/contacts/contactsIcons'

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <h2 className={classes.title}>Stanislav U. Skorobogatov</h2>
        <div className={classes.contacts}>
          <a href='mailto:skoriy12990@gmail.com'>
            <img src={contactsIcons.mail} alt={'Email'} title={'Email'} />
          </a>
          <a href='https://t.me/StanislavSkor' target={'_blank'} rel='noreferrer'>
            <img src={contactsIcons.telegram} alt={'Telegram'} title={'Telegram'} />
          </a>
          <a href='https://wa.me/79648911197' target={'_blank'} rel='noreferrer'>
            <img src={contactsIcons.whatsapp} alt={'Whatsapp'} title={'Whatsapp'} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
