import Image from 'next/image'
import KShaw from 'photos/sponsors/kshaw_bw.png'
import Insomnia from 'photos/sponsors/insomnia_cookies.svg'

const primarySponsors = [
  {
    name: 'Insomnia Cookies',
    img: Insomnia,
    url: 'https://insomniacookies.com/',
  },
  {
    name: 'Kirkland and Shaw Inc.',
    img: KShaw,
    url: 'https://www.kirklandandshaw.com/',
  },
]

const Grid: React.FC<{
  sponsors: Array<{
    img: StaticImageData
    name: string
    url: string
  }>
}> = ({ children, sponsors }) => (
  <div className="my-8 grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-6">
    {sponsors.map((s) => (
      <a
        key={s.name}
        className=""
        href={s.url}
        target={'_blank'}
        rel="noreferrer"
      >
        <div>
          <Image
            src={s.img}
            alt={s.name}
            height={150}
            objectFit="contain"
            objectPosition={'center center'}
          />
        </div>
      </a>
    ))}
  </div>
)

const Sponsors = () => {
  return (
    <>
      <Grid sponsors={primarySponsors} />
    </>
  )
}

export default Sponsors
