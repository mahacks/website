import clsx from 'clsx'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '@hackclub/icons'

const navItems = {
  'how it works': '/#how-it-works',
  register: '/register',
  faq: '/#faq',
  sponsors: '/#sponsors',
  previous: '/#previous',
}

const Navbar: React.FC<{}> = ({}) => {
  const [isAtTop, setAtTop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const scrollListener = () => {
      const pos = window.scrollY
      setAtTop(pos < 10)
    }

    const resizeListener = () => {
      // If window is bigger than sm breakpoint open the menu
      setIsMobile(window.innerWidth < 640)
      setMenuOpen(window.innerWidth >= 640)
    }

    scrollListener()
    resizeListener()

    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return (
    <div
      className={clsx(
        'fixed top-0 w-full z-40 transition-all bg-opacity-90',
        !isAtTop && 'border-b bg-white',
        isAtTop && menuOpen && 'bg-white sm:bg-transparent'
      )}
    >
      <div
        className={clsx(
          'flex flex-col sm:flex-row gap-3 md:gap-7 max-w-6xl mx-auto px-8 transition-all',
          isAtTop ? 'py-8' : 'py-5'
        )}
      >
        <div className="flex items-center">
          <Link href={'/'}>
            <a className="flex-grow">
              <div className="font-bold">MAHacks</div>
            </a>
          </Link>

          <button className="sm:hidden">
            <Icon
              glyph="menu"
              size={24}
              onClick={() => setMenuOpen((o) => !o)}
            />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <>
              <div className="flex-1" />
              {Object.entries(navItems).map(([name, href]) => (
                <motion.div
                  key={name}
                  initial={
                    isMobile && {
                      x: -40,
                      opacity: 0,
                      rotate: -10,
                    }
                  }
                  animate={{
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    y: 30,
                    opacity: 0,
                  }}
                >
                  <Link href={href}>
                    <a className="font-bold">{name}</a>
                  </Link>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
