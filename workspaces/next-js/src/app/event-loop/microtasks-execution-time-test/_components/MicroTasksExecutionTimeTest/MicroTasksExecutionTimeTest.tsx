'use client'

import Button from '@/components/Button'
import { useEffect, useRef } from 'react'

const MicroTasksExecutionTimeTest = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) {
      return
    }

    const buttonEl = buttonRef.current

    buttonEl.addEventListener('click', () => {
      queueMicrotask(() => console.log('microtask 1'))

      console.log('listener 1')
    })

    buttonEl.addEventListener('click', () => {
      queueMicrotask(() => console.log('microtask 2'))

      console.log('listener 2')
    })
  }, [])

  return (
    <div className="flex gap-5">
      <Button ref={buttonRef}>Normal click</Button>

      <Button onClick={() => buttonRef.current?.click()}>JS click</Button>
    </div>
  )
}

export default MicroTasksExecutionTimeTest
