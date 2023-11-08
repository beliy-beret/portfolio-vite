import { ConfigProvider, Spin } from 'antd'
import { createContext, useContext, useEffect, useState } from 'react'

import { About } from './sections/about/About'
import { Contacts } from './sections/myContacts/Contacts'
import { Container } from './components/container/Container'
import { Footer } from './sections/footer/Footer'
import { Header } from './sections/header/Header'
import { MySkills } from './sections/mySkills/MySkills'
import { Projects } from './sections/myProjects/Projects'

export type SectionNamesType = 'about' | 'skills' | 'projects' | 'contacts'
type ContextType = {
  activeSectionName: SectionNamesType
  setActiveSectionName: (name: SectionNamesType) => void
}
export const AppContext = createContext<ContextType>({} as ContextType)
export const useAppContext = () => useContext<ContextType>(AppContext)

export const App = () => {
  const [isInit, setIsInit] = useState(false)
  const [activeSectionName, setActiveSectionName] = useState<SectionNamesType>(
    '' as SectionNamesType,
  )
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsInit(true), 800)
    return () => clearTimeout(timeoutId)
  }, [])

  if (!isInit) {
    return (
      <div className='spiner'>
        <Spin tip='Loading' size='large' />
      </div>
    )
  }

  console.log(import.meta.env)
  return (
    <AppContext.Provider value={{ activeSectionName, setActiveSectionName }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#28a745',
          },
        }}
      >
        <Header />
        <main>
          <Container>
            <About />
            <MySkills />
            <Projects />
            <Contacts />
          </Container>
        </main>
        <Footer />
      </ConfigProvider>
    </AppContext.Provider>
  )
}
