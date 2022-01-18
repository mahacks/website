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
        'font-bold mb-8',
        small ? 'text-2xl pt-12' : 'text-4xl pt-20'
      )}
    >
      {children}
    </Comp>
  )
}

export default Heading
