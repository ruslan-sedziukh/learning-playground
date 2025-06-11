import { Suspense } from 'react'
import Loading from './loading'
import SortProducts from './SortProducts'
import Link from 'next/link'
import { Dumb } from './_components/Dumb'

const LoadingComponent = async () => {
  const a: string = await new Promise((resolve) => {
    setTimeout(() => resolve('Hey'), 3000)
  })

  return (
    <>
      <div>{a}</div>
    </>
  )
}

const LoadingComponent2 = async () => {
  const a: string = await new Promise((resolve) => {
    setTimeout(() => resolve('Hey you'), 1000)
  })

  return (
    <>
      <Dumb content={a} />
    </>
  )
}

const LoadingPage = () => {
  return (
    <>
      <h1>Loading page</h1>

      <nav>
        <Link href="/loading-page/nested" className="text-orange-500 underline">
          Nested
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <LoadingComponent />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <LoadingComponent2 />
      </Suspense>

      <SortProducts />
    </>
  )
}

export default LoadingPage
