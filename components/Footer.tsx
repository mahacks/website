import Icon from '@hackclub/icons'
import Link from 'next/link'

const SocialButton = ({ glyph, href }: any) => (
  <a target={'_blank'} rel="noreferrer" href={href}>
    <Icon
      glyph={glyph}
      size={36}
      className="hover:text-secondary transition-all"
    />
  </a>
)

const FooterLink = ({ href, children }: any) => (
  <Link href={href}>
    <a className="hover:text-secondary underline decoration-dotted transition-all ">
      {children}
    </a>
  </Link>
)

const Footer: React.FC = () => {
  return (
    <div className="p-14 flex flex-col gap-3 text-center items-center bg-gray-100 text-sm">
      <div className="flex gap-3">
        <SocialButton
          href="https://www.instagram.com/ma_hacks/"
          glyph="instagram"
        />
        <SocialButton href="https://twitter.com/ma_hacks" glyph="twitter" />
        <SocialButton href="https://github.com/mahacks" glyph="github" />
      </div>

      <div className="flex gap-3 rounded-md p-2">
        <FooterLink href="/conduct">code of conduct</FooterLink>
        <FooterLink href="https://2019.mahacks.com/">2019 website</FooterLink>
      </div>

      <p className="font-semibold">
        Copyright &copy; {new Date().getFullYear()} MAHacks.
      </p>
      <div className="text-gray-600">
        <p>Fiscally sponsored by The Hack Foundation.</p>
        <p>Nonprofit EIN: 81-2908499</p>
      </div>
    </div>
  )
}

export default Footer
