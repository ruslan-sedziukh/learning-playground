import { ButtonHTMLAttributes, MouseEventHandler, ReactNode, Ref } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  active?: boolean
  ref?: Ref<HTMLButtonElement>
  onClickAction?: () => void
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  onClick,
  active = true,
  ref,
  className,
  ...res
}: Props) => {
  const ownClasses = twJoin(
    'rounded cursor-pointer px-2 text-white w-max',
    active ? 'bg-blue-300' : 'bg-gray-400'
  )

  return (
    <button
      className={twMerge(ownClasses, className)}
      onClick={active ? onClick : undefined}
      ref={ref || undefined}
      {...res}
    >
      {children}
    </button>
  )
}

export default Button
