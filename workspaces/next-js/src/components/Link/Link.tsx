import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink className="text-blue-400 hover:text-violet-400" href={href}>
      {children}
    </NextLink>
  )
}

export default Link
