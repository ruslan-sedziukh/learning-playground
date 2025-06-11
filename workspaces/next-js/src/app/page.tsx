import TableOfContents from './_components/TableOfContents'
import type { SectionData } from './_components/TableOfContents/types'

const sections: SectionData[] = [
  {
    heading: 'Next.js',
    links: [
      {
        href: 'nextjs/new-page',
        text: 'New page',
      },
      {
        href: 'nextjs/loading-page',
        text: 'Loading page',
      },
      {
        href: 'nextjs/dynamic/1',
        text: 'Dynamic 1',
      },
      {
        href: 'nextjs/catch-all/1/2',
        text: 'Catch-all 1 2',
      },
      {
        href: 'nextjs/parallel-routes',
        text: 'Parallel routes',
      },
      {
        href: 'nextjs/group-1',
        text: 'Group 1',
      },
      {
        href: 'nextjs/group-2',
        text: 'Group 2',
      },
      {
        href: 'nextjs/intersecting',
        text: 'Intersecting',
      },
      {
        href: 'nextjs/server-form-action',
        text: 'Server form action',
      },
      {
        href: 'nextjs/server-action',
        text: 'Server action',
      },
      {
        href: 'nextjs/optimistic-form',
        text: 'Optimistic form',
      },
    ],
  },
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
  {
    heading: 'React 19',
    links: [
      {
        href: 'react19/useOptimistic',
        text: 'useOptimistic',
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
