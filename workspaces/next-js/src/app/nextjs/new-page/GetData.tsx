'use client'

import { useEffect, useState } from 'react'

const GetData = () => {
  const [data, setData] = useState<string>()

  const getData = async () => {
    const response = await fetch('/api/new-page-data/Ruslan')

    const data = await response.json()

    setData(data.message)
  }

  useEffect(() => {
    setData('effect')
  }, [])

  return (
    <>
      <button onClick={getData}>Get data</button>

      <div>{data ? data : 'empty'}</div>
    </>
  )
}

export default GetData
