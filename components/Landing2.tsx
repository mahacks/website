import Link from 'next/link'
import { HiCalendar, HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi'
import Button from './Button'

const Landing: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto h-screen flex flex-col gap-10 justify-center">
      <h1 className="text-5xl md:text-8xl font-extrabold text-transparent drop-shadow-lg bg-clip-text bg-gradient-to-r from-primary to-secondary bg-oversize animate-moving-bg">
        MAHacks VI
      </h1>

      <p className="text-xl font-bold max-w-xl">
        High schoolers: learn to code and meet new friends with 24 hours of learning, hacking, free food and prizes.
      </p>

      <div className="flex gap-3 font-semibold">
        <div className="flex items-center">
          <HiOutlineLocationMarker className="inline-block mx-2" size={20} />
          Boston, MA
        </div>
        <div className="flex items-center">
          <HiOutlineCalendar className="inline-block mx-2" size={20} />
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
