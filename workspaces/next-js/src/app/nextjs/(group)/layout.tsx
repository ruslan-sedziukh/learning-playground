import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Group layout</p>
      <div>{children}</div>
    </div>
  )
}

export default Layout
