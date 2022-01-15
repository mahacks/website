import clsx from 'clsx'
import Image from 'next/image'

import Image1 from 'photos/2019/IMG_4924.jpeg'
import Image2 from 'photos/2018/IMG_0817.jpeg'
import Image3 from 'photos/2019/IMG_2647.jpeg'
import Image4 from 'photos/1.jpeg'

const GridCard: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(className, 'bg-gray-100 p-6 rounded-3xl flex items-center')}>
      {children}
    </div>
  )
}

const GridImage: React.FC<{
  className?: string
  title: string
  src: StaticImageData
}> = ({ className, title, src }) => {
  return (
    <div
      className={clsx(
        'next-image-full-height rounded-3xl overflow-hidden',
        className
      )}
    >
      <Image
        layout="responsive"
        src={src}
        alt={title}
        title={title}
        className="rounded-3xl hover:scale-[102%] transition-all duration-200"
        objectFit="cover"
        objectPosition={'center'}
        sizes="50vw"
        quality={'60'}
        placeholder="blur"
      />
    </div>
  )
}

const InfoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 grid-flow-row-dense gap-6">
      <GridCard className="col-span-3 text-xl font-medium">
        MAHacks runs from March 19-20. You’ll get matched into a team and spend 24 hours coding - or learning how - as well as attending workshops, eating food, playing games, making friends, and more!
      </GridCard>
      <GridImage
        className="col-span-3"
        src={Image1}
        title="Photo from MAHacks 2019 by Amogh Chaubey"
      />
      <GridImage
        className="col-span-2"
        src={Image3}
        title="Photo from MAHacks 2019 by Chris Walker"
      />
      <GridCard className="col-span-2 text-xl font-medium">
        By the end of the weekend, you&apos;ll have an awesome project that you&apos;ll demo with your team!
      </GridCard>
      <GridImage
        className="col-span-2"
        src={Image4}
        title="MAHackers collaborating on their project"
      />
      {/* <GridCard className="col-span-2 text-xl font-medium">
        Prizes will be awarded based on creativity, ingenuity, and functionality.
      </GridCard> */}
      {/* <GridImage className="col-span-2 row-span-3" src={Image2} title="Two MAHacks 2018 attendees" /> */}
    </div>
  )
}

export default InfoGrid
