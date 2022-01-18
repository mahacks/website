import clsx from 'clsx'

const Heading: React.FC<{
  className?: string
  as?: string
  small?: boolean
}> = ({ children, as = 'h2', className, small }) => {
  const Comp: any = as
  return (
    <Comp
      className={clsx(
        className,
        'font-bold pt-20 mb-8',
        small ? 'text-3xl' : 'text-4xl'
      )}
    >
      {children}
    </Comp>
  )
}

export default Heading
