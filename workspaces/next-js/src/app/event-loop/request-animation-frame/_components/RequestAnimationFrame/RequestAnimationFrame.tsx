'use client'

import Button from '@/components/Button'
import Box from '../Box'
import { useRef, useState } from 'react'
import { runWithAnimationFrame, runWithTimeout } from './utils'

const RequestAnimationFrame = () => {
  const [isButtonActive, setIsButtonActive] = useState(true)

  const timeoutBoxRef = useRef<HTMLDivElement>(null)
  const frameBoxRef = useRef<HTMLDivElement>(null)

  const runBoxes = () => {
    if (!timeoutBoxRef.current || !frameBoxRef.current) {
      return
    }

    runWithTimeout(timeoutBoxRef.current)
    runWithAnimationFrame(frameBoxRef.current)

    setIsButtonActive(false)
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-[1024px] flex flex-col gap-5 relative">
        <Box ref={timeoutBoxRef}>timeout</Box>

        <Box ref={frameBoxRef}>frame</Box>
      </div>

      <Button onClick={() => runBoxes()} active={isButtonActive}>
        Go, go, go!
      </Button>
    </div>
  )
}

export default RequestAnimationFrame
