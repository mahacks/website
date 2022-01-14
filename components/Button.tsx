import clsx from 'clsx'
import { MouseEventHandler } from 'react'

const Button: React.FC<{
  type?: 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}> = ({ children, type = 'button', onClick, className }) => {
  return (
    <button
      type={type as any}
      className={clsx(
        'bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 text-white text-lg font-bold py-3 px-5 rounded-md focus:ring-4 ring-primary-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
