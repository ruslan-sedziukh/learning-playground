import Section from './Section'
import type { SectionData } from './types'

type Props = {
  sections: SectionData[]
}

const TableOfContents = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section) => (
        <Section section={section} key={section.heading} />
      ))}
    </>
  )
}

export default TableOfContents
