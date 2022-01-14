import Link from 'next/link'
import { HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import Button from './Button'

const Landing: React.FC = () => {
  return (
    <div className="mx-1 h-screen flex flex-col gap-14 justify-center items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent drop-shadow-lg bg-clip-text bg-gradient-to-r from-secondary to-primary bg-oversize animate-moving-bg">
        MAHacks VI
      </h1>

      <p className="text-xl font-bold max-w-xl">
        Learn to code, build crazy projects, and meet others at Boston’s top
        hackathon organized by and for high schoolers.
      </p>

      <div className="flex gap-3 font-semibold">
        <div className="flex items-center">
          <HiOutlineLocationMarker className="inline-block mx-2" size={20} />
          Boston, MA
        </div>
        <div className="flex items-center">
          <HiOutlineClock className="inline-block mx-2" size={20} />
          March 19-20
        </div>
      </div>

      <Link href="/register">
        <a>
          <Button>Register Now</Button>
        </a>
      </Link>
    </div>
  )
}

export default Landing
