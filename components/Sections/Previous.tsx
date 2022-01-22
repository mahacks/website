import MahacksV from 'photos/2019/20191027_111544.jpeg'
import MahacksIV from 'photos/IV/IMG_0788.jpeg'
import MahacksIII from 'photos/III/IMG_0132.jpeg'
import MahacksII from 'photos/II/IMG_0699.jpeg'
import MahacksI from 'photos/I/aaaa.jpeg'

import Image from 'next/image'

const Link: React.FC<{
  img: StaticImageData
  name: string
  url: string
}> = ({ img, name, url }) => (
  <a className="" href={url} target={'_blank'} rel="noreferrer">
    <div className="h-full relative rounded-xl border-4 border-white overflow-clip hover:scale-105 grayscale hover:grayscale-0 transition-all">
      <Image
        src={img}
        alt={name}
        width={300}
        height={200}
        objectFit="cover"
        quality={'60'}
      />
      <div className="absolute w-full bottom-0 p-2 bg-bg bg-opacity-60 text-center text-sm">
        {name}
      </div>
    </div>
  </a>
)

const Previous = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-4">
      <Link
        img={MahacksV}
        name={'MAHacks V @ Rapid7 (October 2019)'}
        url={'https://photos.app.goo.gl/ZBZZoG9zDo5bsSj66'}
      />
      <Link
        img={MahacksIV}
        name={'MAHacks IV @ WordStream (December 2018)'}
        url={'https://photos.app.goo.gl/qXpeSPy4U6gnJhM47'}
      />
      <Link
        img={MahacksIII}
        name={'MAHacks III @ Upstatement (February 2018)'}
        url={
          'https://drive.google.com/open?id=18FUEZu3LfFUhlqt9DBDRrKmnufJGuqmn'
        }
      />
      <Link
        img={MahacksII}
        name={'MAHacks II @ Canopy Coworking City (June 2017)'}
        url={'https://drive.google.com/open?id=0B3ldwpaUHYkFdmdFSHUxNTVCTGM'}
      />
      <Link
        img={MahacksI}
        name={'MAHacks I @ MIT Stata Center (December 2016)'}
        url={'https://drive.google.com/open?id=0B4nO8WEqjbHXeDdEMFdfcXY5ZUk'}
      />
    </div>
  )
}

export default Previous
