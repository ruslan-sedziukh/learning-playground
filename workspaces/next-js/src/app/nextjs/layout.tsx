import React from 'react'

export default function RootLayout({
  children,
}: // modal,
Readonly<{
  children: React.ReactNode
  // modal: React.ReactNode
}>) {
  return (
    <div className="w-full max-w-[1024px] h-full">
      <div>
        {children}
        {/* {modal} */}
      </div>
    </div>
  )
}
