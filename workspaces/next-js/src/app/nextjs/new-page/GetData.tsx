'use client'

import Button from '@/components/Button'
import { useEffect, useState } from 'react'

const GetData = () => {
  const [data, setData] = useState<string>()

  const getData = async () => {
    const response = await fetch('/nextjs/api/new-page-data/Ruslan')

    const data = await response.json()

    setData(data.message)
  }

  useEffect(() => {
    setData('effect')
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={getData}>Get data</Button>

      <div>{data ? data : 'empty'}</div>
    </div>
  )
}

export default GetData
