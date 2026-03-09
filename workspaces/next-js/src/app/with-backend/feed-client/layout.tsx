import React from 'react'
import RQProvider from '@/components/RQProvider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RQProvider>
      {children}
    </RQProvider>
  )
}
