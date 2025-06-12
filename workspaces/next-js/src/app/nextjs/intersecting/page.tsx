import Link from '@/components/Link/Link'

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="../parallel-routes">parallel routes</Link>
          </li>

          <li>
            <Link href="../new-page">new page</Link>
          </li>

          <li>
            <Link href="../group-1">group 1</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
