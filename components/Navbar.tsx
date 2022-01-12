import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavButton = ({ children, href }: any) => (
  <Link href={href}>
    <a className="font-bold">{children}</a>
  </Link>
)

const Navbar: React.FC<{}> = ({}) => {
  const [isAtTop, setAtTop] = useState(true)

  useEffect(() => {
    const listener = (e: Event) => {
      const pos = window.scrollY
      setAtTop(pos < 10)
    }

    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [])

  return (
    <div
      className={clsx(
        'fixed top-0 w-full z-40 transition-all',
        !isAtTop && 'border-b bg-white bg-opacity-90'
      )}
    >
      <div
        className={clsx(
          'flex gap-7 max-w-6xl mx-auto px-8 transition-all',
          isAtTop ? 'py-8' : 'py-5'
        )}
      >
        <Link href={'/'}>
          <a>
            <div className="font-bold">MAHacks</div>
          </a>
        </Link>
        <div className="flex-1" />
        <NavButton href={'https://airtable.com/shrXN7pgnRPqKeqzb'}>
          register
        </NavButton>
        <NavButton href={'#faq'}>faq</NavButton>
        <NavButton href={'#sponsors'}>sponsors</NavButton>
        <NavButton href={'https://2019.mahacks.com/past-events'}>
          previous
        </NavButton>
      </div>
    </div>
  )
}

export default Navbar
