import clsx from 'clsx'
import { forwardRef, HTMLProps } from 'react'

const Input = forwardRef<
  HTMLInputElement,
  { as?: 'input' | 'select' | 'textarea' } & HTMLProps<HTMLInputElement>
>(function InputComponent(
  { as = 'input', children, className, ...props },
  ref
) {
  const Comp: any = as
  return (
    <Comp
      ref={ref}
      className={clsx(
        className,
        'rounded-lg p-3 w-full border-2 border-transparent bg-bg-input hover:border-gray-600 focus:border-gray-500 outline-none'
      )}
      {...props}
    >
      {children}
    </Comp>
  )
})

export default Input
