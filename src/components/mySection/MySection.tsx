import { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import { SectionNamesType, useAppContext } from '../../App'

import { useIntersectionObserver } from 'usehooks-ts'

type DefaultDivPropsType = HTMLAttributes<HTMLDivElement>

type ComponentPropsType = DefaultDivPropsType & {
  children: ReactNode
  sectionName: SectionNamesType
}

export const Section: FC<ComponentPropsType> = ({ children, sectionName, ...restProps }) => {
  // Intersection Observer
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.95 })
  const isVisible = !!entry?.isIntersecting
  const { setActiveSectionName } = useAppContext()
  const changeIntersectingSection = () => isVisible && setActiveSectionName(sectionName)

  useEffect(() => {
    changeIntersectingSection()
  }, [isVisible])

  return (
    <section ref={ref} data-name={sectionName} {...restProps}>
      {children}
    </section>
  )
}
