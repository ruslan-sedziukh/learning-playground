import Link from '@/components/Link'

export default function Home() {
  return (
    <nav className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl">Event Loop</h2>

        <ul className="list-disc ml-4">
          <li>
            <Link href="event-loop/splitting-cpu-hungry-task">
              Splitting CPU hungry task
            </Link>
          </li>

          <li>
            <Link href="event-loop/batching-operations">
              Batching operations
            </Link>
          </li>

          <li>
            <Link href="event-loop/react-batching-operations">
              React batching operations
            </Link>
          </li>

          <li>
            <Link href="event-loop/request-animation-frame">
              Request animation frame
            </Link>
          </li>

          <li>
            <Link href="event-loop/microtasks-execution-time-test">
              Microtasks execution time test
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
