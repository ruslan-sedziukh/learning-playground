'use client'

import { useSearchParams } from 'next/navigation'

const buttonStyles = 'bordered border-2 border-black'

export default function SortProducts() {
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams.toString())

  console.log('params:', params.toString())

  function updateSorting(sortOrder: string) {
    // const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <div className="flex gap-2">
      <button className={buttonStyles} onClick={() => updateSorting('asc')}>
        Sort Ascending
      </button>
      <button className={buttonStyles} onClick={() => updateSorting('desc')}>
        Sort Descending
      </button>
    </div>
  )
}
