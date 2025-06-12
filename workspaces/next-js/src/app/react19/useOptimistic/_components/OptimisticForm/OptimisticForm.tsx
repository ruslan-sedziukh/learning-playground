'use client'

import { useOptimistic, useState, useRef } from 'react'
import { deliverMessage } from './action'
import Input from '@/components/Input'
import Button from '@/components/Button'

type Message = {
  text: string
  sending: boolean
  key: number
}

function Thread({
  messages,
  sendMessage,
}: {
  messages: Message[]
  sendMessage: (formData: FormData) => Promise<void>
}) {
  const formRef = useRef<HTMLFormElement>(null)

  async function formAction(formData: FormData) {
    console.log('action called')

    const message = formData.get('message')?.toString()

    addOptimisticMessage(message || '')

    formRef?.current?.reset()

    await sendMessage(formData)
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: string) => [
      ...state,
      {
        text: newMessage,
        sending: true,
        key: messages[messages.length - 1].key + 1,
      },
    ]
  )

  return (
    <div className="flex flex-col gap-2">
      {optimisticMessages.map((message: Message, index: number) => (
        <div key={index}>
          {message.text}

          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}

      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col gap-2 items-start"
      >
        <Input
          type="text"
          name="message"
          placeholder="Hello!"
          onChange={() => console.log('change')}
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}

export default function OptimisticForm() {
  const [messages, setMessages] = useState([
    { text: 'Hello there!', sending: false, key: 1 },
  ])

  async function sendMessage(formData: FormData) {
    const sentMessage = await deliverMessage(
      formData.get('message')?.toString() || ''
    )

    setMessages((messages: Message[]) => [
      ...messages,
      {
        text: sentMessage,
        sending: false,
        key: messages[messages.length - 1].key + 1,
      },
    ])
  }

  return <Thread messages={messages} sendMessage={sendMessage} />
}
