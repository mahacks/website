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
    <div className={clsx(className, 'bg-gray-100 p-6 rounded-3xl')}>
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
      <GridCard className="col-span-3 font-semibold">
        MAHacks runs from March 19-20. You’ll get matched into a team based on
        your coding experience and spend two days coding, attending workshops,
        and more! By the end of the weekend, you’ll have built an awesome
        project! It’s open to all high schoolers,{' '}
        <strong>regardless of previous coding experience</strong>, at no cost.
      </GridCard>
      <GridImage
        className="col-span-3 row-span-2"
        src={Image1}
        title="Photo from MAHacks 2019 by Amogh Chaubey"
      />
      <GridImage
        className="col-span-3"
        src={Image3}
        title="Photo from MAHacks 2019 by Chris Walker"
      />
      <GridImage
        className="col-span-2"
        src={Image4}
        title="MAHackers collaborating on their project"
      />
      <GridCard className="col-span-3 font-semibold">
        MAHacks is one of Boston&pos;s only
      </GridCard>
      {/* <GridImage className="col-span-2 row-span-3" src={Image2} title="Two MAHacks 2018 attendees" /> */}
    </div>
  )
}

export default InfoGrid
