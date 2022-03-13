import Link from 'next/link'
import {
  HiCalendar,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'
import Button from './Button'
import ShapeRain from './Effects/ShapeRain'
import Logo from './Logo'

const Landing: React.FC = () => {
  return (
    <div>
      <ShapeRain count={10} />
      <Parallax y={[20, -20]}>
        <div className="px-3 max-w-3xl mx-auto h-screen flex flex-col items-start gap-6 sm:gap-10 justify-center">
          <div className="p-3 text-center bg-accent-red border-accent-red border-2 rounded-lg font-bold animate-hover">
            MAHacks has been postponed from March 19-20. Please check
            your email for more details.
          </div>

          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-brand font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              MAHACKS VI
            </h1>
            {/* <div className="text-xl font-semibold font-heading">
              March 19-20 @ Boston, MA
            </div> */}
          </div>

          <p className="sm:text-xl font-bold max-w-xl">
            High schoolers: Come join us for a weekend of fun! Learn to code,
            hone your skills, and make new friends, with free food and prizes
            over 24 hours!
          </p>

          <div className="flex gap-3 font-semibold text-2xl drop-shadow-glow-white">
            <div className="flex items-center">
              <HiOutlineLocationMarker
                className="inline-block mx-2"
                size={20}
              />
              Boston, MA
            </div>
            <div className="flex items-center">
              <HiOutlineCalendar className="inline-block mx-2" size={20} />
              Spring 2022
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/register">
              <a>
                <Button glow>Register Now</Button>
              </a>
            </Link>

            {/* <Link href="/register-interest"> */}
            <a
              href="https://airtable.com/shruVkzby5uUng11e"
              className="underline text-gray-400 text-xs"
            >
              Not yet sure if you can attend? Get a reminder closer to the
              event.
            </a>
            {/* </Link> */}
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Landing
