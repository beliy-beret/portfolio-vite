import { createContext, useContext, useState } from 'react'

import { About } from './sections/about/About'
import { Contacts } from './sections/Contacts/Contacts'
import { Container } from './components/container/Container'
import { Footer } from './sections/footer/Footer'
import { Header } from './sections/header/Header'
import { MySkills } from './sections/mySkills/MySkills'
import { Projects } from './sections/Projects/Projects'

export type SectionNamesType = 'about' | 'skills' | 'projects' | 'contacts'
type ContextType = {
  activeSectionName: SectionNamesType
  setActiveSectionName: (name: SectionNamesType) => void
}
export const AppContext = createContext<ContextType>({} as ContextType)
export const useAppContext = () => useContext<ContextType>(AppContext)

export const App = () => {
  const [activeSectionName, setActiveSectionName] = useState<SectionNamesType>('about')
  return (
    <AppContext.Provider value={{ activeSectionName, setActiveSectionName }}>
      <div className={'app'}>
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
      </div>
    </AppContext.Provider>
  )
}
