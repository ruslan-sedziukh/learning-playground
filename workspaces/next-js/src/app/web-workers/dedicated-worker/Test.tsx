'use client'

import { useEffect, useRef, useState } from 'react'

const Test = () => {
  const [result, setResult] = useState<number | null>(null)
  const workerRef = useRef<Worker | null>(null)

  useEffect(() => {
    workerRef.current = new Worker(new URL('./worker.ts', import.meta.url))

    console.log('Worker:', workerRef.current)

    workerRef.current.onmessage = (e) => {
      setResult(e.data)
    }

    workerRef.current.onerror = (e) => {
      console.error('Worker error:', e)
    }

    console.log('Worker:', workerRef.current)

    workerRef.current.postMessage({ task: 'makeBigCalculation' })

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate()
      }
    }
  }, [])

  console.log('result:', result)

  return (
    <div>
      <button onClick={() => console.log('button clicked')}>click</button>
    </div>
  )
}

export default Test
