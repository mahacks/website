import type { NextPage } from 'next'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/Sections/InfoGrid'
import Heading from 'components/Heading'
import { BsArrowRight } from 'react-icons/bs'
import FAQ from 'components/Sections/FAQ.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Meta />

      <div>
        <InfoGrid />

        <div id="sponsors">
          <Heading>Sponsors</Heading>
          <p className="text-gray-400 text-sm">
            MAHacks is made possible by our awesome sponsors! Want to work
            together?{' '}
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:team@mahacks.com"
            >
              Let&apos;s talk <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>
        </div>

        <div id="faq">
          <Heading>FAQ</Heading>
          <p className="text-gray-400 text-sm">
            Have a question?{' '}
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:team@mahacks.com"
            >
              Contact the team <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>

          <div className="p-6 rounded-2xl bg-bg-card my-4 mdx">
            <FAQ />
          </div>
        </div>

        <div id="team">
          <Heading>Team</Heading>

          <Team />
        </div>

        {/* <div id="previous">
          <Heading>Previous MAHacks</Heading>

          <p className=''>
            <a href='2019.mahacks.com'>2019 Website</a>
            <a href='https://photos.app.goo.gl/ZBZZoG9zDo5bsSj66'>2019 Photos @ Rapid7</a>
            
          </p>
        </div> */}
      </div>
    </HomeLayout>
  )
}

export default Home
