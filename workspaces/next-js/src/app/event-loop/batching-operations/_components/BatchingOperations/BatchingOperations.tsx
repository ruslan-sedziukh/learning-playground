'use client'

import Button from '@/components/Button'

const messageQueue: string[] = []

const sendMessage = (message: string) => {
  messageQueue.push(message)

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue)
      messageQueue.length = 0
      console.log(json)
    })
  }
}

const BatchingOperations = () => {
  const runNOperations = (n: number) => {
    for (let i = 0; i < n; i++) {
      sendMessage(`message ${i}`)
    }
  }

  return <Button onClick={() => runNOperations(10)}>Run operations</Button>
}

export default BatchingOperations
