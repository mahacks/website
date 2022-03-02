import Image from 'next/image'
import KShaw from 'photos/sponsors/kirklandshaw_bw.png'
import Insomnia from 'photos/sponsors/insomnia.png'
import DCU from 'photos/sponsors/dcu.svg'
import Givebutter from 'photos/sponsors/givebutter.svg'
// import SmartKargo from 'photos/sponsors/sk.svg'
// import Virtual from 'photos/sponsors/virtual.svg'
// import MITOGCR from 'photos/sponsors/mit_ogcr.svg'
// import NuVu from 'photos/sponsors/nuvu.svg'
import IA from 'photos/sponsors/ia-dark.svg'
import OnStartups from 'photos/sponsors/onstartups.svg'
import Acera from 'photos/sponsors/acera.svg'

const primarySponsors = [
  {
    name: 'OnStartups',
    img: OnStartups,
    url: 'https://onstartups.com/',
  },
  {
    name: 'DCU',
    img: DCU,
    url: 'https://dcu.org/',
  },
  {
    name: 'Givebutter',
    img: Givebutter,
    url: 'https://givebutter.com/',
  },
  {
    name: 'Infinite Analytics',
    img: IA,
    url: 'https://infiniteanalytics.com/',
  },
  // {
  //   name: 'SmartKargo',
  //   img: SmartKargo,
  //   url: 'https://smartkargo.com/',
  // },
  // {
  //   name: 'NuVu Studio',
  //   img: NuVu,
  //   url: 'https://nuvustudio.com/',
  // },
  {
    name: 'Acera School',
    img: Acera,
    url: 'https://aceraschool.org/',
  },
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
  // {
  //   name: 'MIT OGCR',
  //   img: MITOGCR,
  //   url: 'https://ogcr.mit.edu/',
  // },
  // {
  //   name: 'Virtual, Inc.',
  //   img: Virtual,
  //   url: 'https://virtualinc.com/',
  // },
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
