import Image from 'next/image'
import BackgroundImage from '../photos/landing.jpeg'
import Navbar from './Navbar'
import { Parallax } from 'react-scroll-parallax'
import Landing from './Landing'
import Footer from './Footer'
import clsx from 'clsx'

const PageLayout: React.FC<{ mdx?: boolean }> = ({ children, mdx }) => {
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 my-20 min-h-screen">
        <div className={clsx(mdx && 'mdx')}>{children}</div>
      </div>

      <Footer />
    </div>
  )
}

export default PageLayout
