'use client'

import Button from '@/components/Button'
import { useState } from 'react'

const countTo = 1e9
const splitOn = 1e7

const CPUHungry = () => {
  const [isCalculating, setIsCalculating] = useState(false)

  const callSplitted = () => {
    setIsCalculating(true)

    let i = 0
    const start = Date.now()

    const count = () => {
      if (i < countTo - splitOn) {
        setTimeout(count)
      }

      do {
        i++
      } while (i % splitOn != 0)

      if (i == countTo) {
        setIsCalculating(false)

        alert('Done in ' + (Date.now() - start) + 'ms')
      }
    }

    count()
  }

  const callNotSplitted = () => {
    setIsCalculating(true)

    let i = 0
    const start = Date.now()

    const count = () => {
      while (i < countTo) {
        i++
      }

      setIsCalculating(false)

      alert('Done in ' + (Date.now() - start) + 'ms')
    }

    count()
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-5">
        <Button active={!isCalculating} onClick={callSplitted}>
          Call splitted
        </Button>

        <Button active={!isCalculating} onClick={callNotSplitted}>
          Call not splitted
        </Button>
      </div>

      <div className="flex justify-center">
        <Button className="w-14" onClick={() => console.log('click')}>
          Log
        </Button>
      </div>
    </div>
  )
}

export default CPUHungry
