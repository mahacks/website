import clsx from 'clsx'
import { forwardRef, HTMLProps } from 'react'

const Input = forwardRef<
  HTMLInputElement,
  { as?: 'input' | 'select' } & HTMLProps<HTMLInputElement>
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
        'rounded-lg p-3 w-full border-2 border-transparent hover:border-gray-200 focus:border-gray-300 outline-none'
      )}
      {...props}
    >
      {children}
    </Comp>
  )
})

export default Input
