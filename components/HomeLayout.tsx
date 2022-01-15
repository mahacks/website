import Image from 'next/image'
import BackgroundImage from '../photos/landing.jpeg'
import Navbar from './Navbar'
import { Parallax } from 'react-scroll-parallax'
import Landing from './Landing2'
import Footer from './Footer'

const HomeLayout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div className="landing-bg-img-container">
          <Image
            layout="responsive"
            src={BackgroundImage}
            alt="Hack Clubbers gather at the SpaceX HQ"
            priority
            quality={30}
            objectFit="cover"
            objectPosition={'center'}
          />

          <style jsx global>{`
            .landing-bg-img-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }

            .landing-bg-img-container:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: white;
              opacity: 0.9;
            }

            .landing-bg-img-container > span {
              height: 100% !important;
            }
          `}</style>
        </div>

        <Parallax y={[20, -20]}>
          <Landing />
        </Parallax>
      </div>

      <div className="h-2 w-full bg-primary" />

      <div className="max-w-5xl mx-auto px-6 my-20">{children}</div>

      <Footer />
    </div>
  )
}

export default HomeLayout
