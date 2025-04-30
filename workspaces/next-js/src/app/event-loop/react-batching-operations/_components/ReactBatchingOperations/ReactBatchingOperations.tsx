'use client'

import Button from '@/components/Button'
import { useState } from 'react'

const ReactBatchingOperations = () => {
  const [messageQueue, setMessageQueue] = useState<string[]>([])

  const sendMessage = (message: string) => {
    setMessageQueue((prev) => [...prev, message])

    if (messageQueue.length % 10 === 0) {
      queueMicrotask(() => {
        const json = JSON.stringify(messageQueue)

        setMessageQueue([])

        console.log('json:', json)
      })
    }
  }

  console.log('messageQueue:', messageQueue)

  const runNOperations = (n: number) => {
    for (let i = 0; i < n; i++) {
      sendMessage(`message ${i}`)
    }
  }

  return <Button onClick={() => runNOperations(10)}>Run operations</Button>
}

export default ReactBatchingOperations
