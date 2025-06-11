import Link from '@/components/Link/Link'

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="new-page">New page</Link>
        </li>

        <li>
          <Link href="loading-page">Loading page</Link>
        </li>

        <li>
          <Link href="dynamic/1">dynamic 1</Link>
        </li>

        <li>
          <Link href="catch-all/1/2">catch-all 1 2</Link>
        </li>

        <li>
          <Link href="parallel-routes">parallel routes</Link>
        </li>

        <li>
          <Link href="group-1">group 1</Link>
        </li>

        <li>
          <Link href="group-2">group 2</Link>
        </li>

        <li>
          <Link href="intersecting">intersecting</Link>
        </li>

        <li>
          <Link href="server-form-action">server form action</Link>
        </li>

        <li>
          <Link href="server-action">server action</Link>
        </li>

        <li>
          <Link href="optimistic-form">optimistic form</Link>
        </li>
      </ul>
    </nav>
  )
}
