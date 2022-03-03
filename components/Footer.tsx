import Icon from '@hackclub/icons'
import Link from 'next/link'

const SocialButton = ({ glyph, href }: any) => (
  <a target={'_blank'} rel="noreferrer" href={href}>
    <Icon
      glyph={glyph}
      size={36}
      className="hover:text-primary transition-all"
    />
  </a>
)

const FooterLink = ({ href, children }: any) => (
  <Link href={href}>
    <a className="hover:text-primary underline decoration-dotted transition-all ">
      {children}
    </a>
  </Link>
)

const Footer: React.FC = () => {
  return (
    <div className="bg-bg-card text-sm">
      <div className="p-14 flex flex-col sm:flex-row max-w-2xl mx-auto gap-6 justify-center">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3">
            <SocialButton
              href="https://www.instagram.com/ma_hacks/"
              glyph="instagram"
            />
            <SocialButton href="https://twitter.com/ma_hacks" glyph="twitter" />
            <SocialButton href="https://github.com/mahacks" glyph="github" />
            <SocialButton href="mailto:team@mahacks.com" glyph="email" />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <FooterLink href="/conduct">code of conduct</FooterLink>
            <FooterLink href="https://v.mahacks.com/">old website</FooterLink>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <a
              target={'_blank'}
              rel="noreferrer"
              href="https://vercel.com/?utm_source=mahacks&utm_campaign=oss"
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/img/powered-by-vercel.svg"
                alt="Powered By Vercel"
                className="w-44"
              />
            </a>
          </div>

          <div>
            <a
              target={'_blank'}
              rel="noreferrer"
              href="https://bank.hackclub.com/mahacks/"
            >
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/img/powered-by-hcb.svg"
                alt="Powered By Hack Club Bank"
                className="w-44"
              />
            </a>
          </div>

          {/* <p className="font-semibold">
        Copyright &copy; {new Date().getFullYear()} MAHacks.
      </p> */}
        </div>
      </div>

      <div className="text-center pb-6">
        <p className="font-semibold p-2">
          Copyright {new Date().getFullYear()} MAHacks.
        </p>

        <div className="text-gray-300">
          <p>
            Fiscally sponsored by{' '}
            <a className="underline" href="https://hackfoundation.org/">
              The Hack Foundation
            </a>
            .
          </p>
          <p>Nonprofit EIN: 81-2908499</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
