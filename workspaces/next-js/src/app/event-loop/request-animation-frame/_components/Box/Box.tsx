import { ReactNode, Ref } from 'react'

type Props = {
  children: ReactNode
  ref: Ref<HTMLDivElement>
}

const Box = ({ children, ref }: Props) => {
  return (
    <div
      ref={ref}
      className="h-16 w-16 bg-blue-500 text-white flex items-center justify-center relative"
    >
      {children}
    </div>
  )
}

export default Box
