import { Button, Divider, Input, Space, Typography, message } from 'antd'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FC, useState } from 'react'

import { Section } from '../../components/mySection/MySection'
import { Title } from '../../components/title/Title'
import axios from 'axios'
import classes from './contacts.module.css'
import { contactsIcons } from '../../assets/images/contacts/contactsIcons'

type Inputs = {
  userName: string
  userContact: string
  userMessage: string
}

export const Contacts: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loadingHandler = (isLoading: boolean) => setIsLoading(isLoading)

  const [messageApi, contextHolder] = message.useMessage()
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Message was send',
    })
  }
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Request was broken, try late.',
    })
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loadingHandler(true)
    axios
      .post(
        'https://api.telegram.org/bot5704162466:AAFm67a2b3h9XCkZsufqVzi4t_Ib91gu2Gs/sendMessage',
        {
          chat_id: 1322204084,
          text: `Name:  ${data.userName}\n Contact:  ${data.userContact}\n Message: '${data.userMessage}'`,
        },
      )
      .then(() => {
        reset()
        success()
      })
      .catch(() => error())
      .finally(() => setTimeout(() => loadingHandler(false), 500))
  }

  return (
    <Section sectionName='contacts' className={classes.contacts} id={'contacts'}>
      {contextHolder}
      <Title>Contacts:</Title>
      {/* <h3 className={classes.formTitle}>Send message</h3> */}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name={'userName'}
          control={control}
          rules={{ required: { value: true, message: 'Enter your name.' } }}
          render={({ field }) => (
            <Input placeholder={'Your name'} status={errors.userName ? 'error' : ''} {...field} />
          )}
        />
        {errors.userName && (
          <Typography.Text type={'danger'}>{errors.userName.message}</Typography.Text>
        )}
        <Controller
          name={'userContact'}
          control={control}
          rules={{ required: { value: true, message: 'Enter your contact.' } }}
          render={({ field }) => (
            <Input
              type={'text'}
              placeholder={'Email address / Telegram / WhatsApp'}
              status={errors.userContact ? 'error' : ''}
              {...field}
            />
          )}
        />
        {errors.userContact && (
          <Typography.Text type={'danger'}>{errors.userContact.message}</Typography.Text>
        )}

        <Controller
          name={'userMessage'}
          control={control}
          render={({ field }) => (
            <Input.TextArea placeholder={'Your message'} rows={5} {...field}></Input.TextArea>
          )}
        />

        <Button type='primary' htmlType='submit' loading={isLoading}>
          Send message
        </Button>
      </form>
      <div className={classes.contactList}>
        <Space align='center' size={'large'}>
          <a href='mailto:skoriy12990@gmail.com'>
            <img src={contactsIcons.mail} alt={'Email'} title={'Email'} />
          </a>
          <a href='https://t.me/StanislavSkor' target={'_blank'} rel='noreferrer'>
            <img src={contactsIcons.telegram} alt={'Telegram'} title={'Telegram'} />
          </a>
          <a href='https://wa.me/79648911197' target={'_blank'} rel='noreferrer'>
            <img src={contactsIcons.whatsapp} alt={'Whatsapp'} title={'Whatsapp'} />
          </a>
        </Space>
      </div>
    </Section>
  )
}
