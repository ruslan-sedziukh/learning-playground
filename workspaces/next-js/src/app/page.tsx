import TableOfContents from './_components/TableOfContents'
import type { SectionData } from './_components/TableOfContents/types'

const sections: SectionData[] = [
  {
    heading: 'Event Loop',
    links: [
      {
        href: 'event-loop/splitting-cpu-hungry-task',
        text: 'Splitting CPU hungry task',
      },
      {
        href: 'event-loop/batching-operations',
        text: 'Batching operations',
      },
      {
        href: 'event-loop/react-batching-operations',
        text: 'React batching operations',
      },
      {
        href: 'event-loop/request-animation-frame',
        text: 'Request animation frame',
      },
      {
        href: 'event-loop/microtasks-execution-time-test',
        text: 'Microtasks execution time test',
      },
    ],
  },
  {
    heading: 'WebWorkers',
    links: [
      {
        href: 'web-workers/dedicated-worker',
        text: 'Dedicated worker',
      },
    ],
  },
]

export default function Home() {
  return (
    <nav className="flex flex-col gap-5">
      <TableOfContents sections={sections} />
    </nav>
  )
}
