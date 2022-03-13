import clsx from 'clsx'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '@hackclub/icons'
import Logo from './Logo'

const navItems = {
  'HOW IT WORKS': '/#how-it-works',
  REGISTER: '/register',
  FAQ: '/#faq',
  SPONSORS: '/#sponsors',
  PREVIOUS: '/#previous',
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

    const clickListener = () => {
      if (window.innerWidth < 640) setMenuOpen(false)
    }

    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', resizeListener)
    window.addEventListener('touchend', clickListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('resize', resizeListener)
      window.removeEventListener('touchend', clickListener)
    }
  }, [])

  return (
    <div
      className={clsx(
        'fixed top-0 w-full z-40 transition-all bg-opacity-90 border-gray-800',
        !isAtTop && 'border-b bg-bg',
        isAtTop && menuOpen && 'bg-bg sm:bg-transparent'
      )}
    >
      {/* <div className='p-1 text-center bg-accent-red font-bold'>MAHacks has been postponed from March 19 to April 10. Please check your email for more details.</div> */}

      <div
        className={clsx(
          'flex flex-col sm:flex-row sm:items-center gap-3 md:gap-7 max-w-6xl mx-auto px-8 transition-all',
          isAtTop ? 'py-6' : 'py-3'
        )}
      >
        <div className="flex items-center">
          <Link href={'/#'} scroll={true}>
            <a>
              <Logo />
            </a>
          </Link>

          <div className="flex-grow" />

          <button className="sm:hidden" onTouchEnd={(e) => e.stopPropagation()}>
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
                    <a className="font-bold hover:drop-shadow-xl transition-all">
                      {name}
                    </a>
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
