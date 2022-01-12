import clsx from 'clsx'

const Heading: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <h2 className={clsx(className, 'text-4xl font-bold pt-20 mb-8')}>
      {children}
    </h2>
  )
}

export default Heading
