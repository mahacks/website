import type { NextPage } from 'next'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/InfoGrid'
import Heading from 'components/Heading'
import { BsArrowRight } from 'react-icons/bs'
import FAQ from 'components/FAQ.mdx'
import Team from 'components/Team'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div>
        <InfoGrid />

        <div id="sponsors">
          <Heading>Sponsors</Heading>
          <p className="text-gray-600 text-sm">
            Want to work together?{' '}
            <a
              className="font-semibold hover:underline"
              href="mailto:team@mahacks.com"
            >
              Let&apos;s talk <BsArrowRight className="inline-block" />
            </a>
          </p>
        </div>

        <div id="faq">
          <Heading>FAQ</Heading>
          <p className="text-gray-600 text-sm">
            Have a question?{' '}
            <a
              className="font-semibold hover:underline"
              href="mailto:team@mahacks.com"
            >
              Contact the team <BsArrowRight className="inline-block" />
            </a>
          </p>

          <div className="p-6 rounded-2xl bg-gray-100 my-4 mdx">
            <FAQ />
          </div>
        </div>

        <div id="team">
          <Heading>Team</Heading>

          <Team />
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
