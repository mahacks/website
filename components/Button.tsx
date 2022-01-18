import clsx from 'clsx'
import { MouseEventHandler } from 'react'

const Button: React.FC<{
  type?: 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  glow?: boolean
}> = ({ children, type = 'button', onClick, className, glow }) => {
  return (
    <button
      type={type as any}
      className={clsx(
        'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-lg font-semibold py-3 px-5 rounded-md focus:ring-4 ring-primary-800',
        glow && 'shadow-glow shadow-primary',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
