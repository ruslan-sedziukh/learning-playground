import Link from '@/components/Link'
import type { SectionData } from '../types'

type Props = {
  section: SectionData
}

const Section = ({ section }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-xl">{section.heading}</h2>

      <ul className="list-disc ml-4">
        {section.links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Section
