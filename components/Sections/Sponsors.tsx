import Image from 'next/image'
import KShaw from 'photos/sponsors/kirklandshaw_bw.png'
import Insomnia from 'photos/sponsors/insomnia.png'
import DCU from 'photos/sponsors/dcu.svg'
import Givebutter from 'photos/sponsors/givebutter.svg'
// import SmartKargo from 'photos/sponsors/sk.svg'

const primarySponsors = [
  {
    name: 'DCU',
    img: DCU,
    url: 'https://www.dcu.org/',
  },
  {
    name: 'Givebutter',
    img: Givebutter,
    url: 'https:/givebutter.com/',
  },
  // {
  //   name: 'SmartKargo',
  //   img: SmartKargo,
  //   url: 'https://www.smartkargo.com/',
  // },
  {
    name: 'Insomnia Cookies',
    img: Insomnia,
    url: 'https://insomniacookies.com/',
  },
  {
    name: 'Kirkland and Shaw',
    img: KShaw,
    url: 'https://kirklandandshaw.com/',
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
        <div className='h-full next-image-full-height'>
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
