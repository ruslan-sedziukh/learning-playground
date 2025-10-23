'use client'

import Button from '@/components/Button'
import { useEffect, useState } from 'react'

interface ClickAndCountProps {
  type?: 'default' | 'warning'
}

const ClickAndCount = ({ type = 'default' }: ClickAndCountProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    return (() => {
      console.log('ClickAndCount unmount')
    })
  }, [])

  return <Button onClick={() => setCount((prev) => prev + 1)}
    className={type === 'warning' ? 'bg-red-600' : ''}
  >{count}</Button>
}

export default ClickAndCount