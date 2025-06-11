'use client'

import { ReactNode, useEffect, useState } from 'react'

const Template = ({ children }: { children: ReactNode }) => {
  const [heading, setHeading] = useState('')

  useEffect(() => {
    setTimeout(() => setHeading('Template main'), 5000)
  }, [])

  return (
    <div>
      {heading}
      {children}
    </div>
  )
}

export default Template
