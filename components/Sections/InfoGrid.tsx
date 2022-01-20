import clsx from 'clsx'
import Image from 'next/image'

import Image1 from 'photos/2019/IMG_4924.jpeg'
import Image2 from 'photos/2018/IMG_0817.jpeg'
import Image3 from 'photos/2019/IMG_2647.jpeg'
import Image4 from 'photos/1.jpeg'
import Image5 from 'photos/2018/IMG_0889.jpeg'
import Image6 from 'photos/2018/8013E4DC-CB5C-4ACB-BAD5-4250F0252F33.jpeg'
import Image7 from 'photos/2019/20191027_111544.jpeg'
import Image8 from 'photos/2019/20191026_151133.jpeg'

const GridCard: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        'bg-gray-800 bg-opacity-50 p-6 rounded-3xl flex items-center text-xl font-medium border-2 shadow-glow'
      )}
    >
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
    <div
      id="how-it-works"
      className="pt-20 flex flex-col sm:grid grid-cols-6 grid-flow-row-dense gap-6"
    >
      <GridCard className="col-span-3 border-accent-blue shadow-accent-blue">
        MAHacks VI will run from March 19-20, 2022. You’ll spend
        24 hours coding - or learning how - as well as attending workshops,
        eating food, playing games, making friends, and more! Know a friend 
        who'd be interested? Invite them!
      </GridCard>
      <GridImage
        className="col-span-3"
        src={Image3}
        title="Photo from MAHacks V @ Rapid 7 by Amogh Chaubey"
      />
      <GridImage
        className="col-span-2"
        src={Image1}
        title="Photo from MAHacks V @ Rapid 7 by Chris Walker"
      />
      <GridCard className="col-span-2 border-accent-green shadow-accent-green">
        By the end of the weekend, you&apos;ll have an awesome project that
        you&apos;ll demo with your team!
      </GridCard>
      <GridImage
        className="col-span-2"
        src={Image4}
        title="MAHackers collaborating on their project"
      />
      <GridImage
        className="col-span-3"
        src={Image8}
        title="Photo from MAHacks V @ Rapid 7 by Jolene Pern"
      />
      <GridCard className="col-span-3 border-accent-red shadow-accent-red">
        {`No, we aren't "hacking" servers or bank accounts - instead - we're "hacking" by making. Somewhat like "hacking" something together. MAHacks is all about learning and collaborating to bring an idea to reality - whether it's a website, app, robot, or something else.`}
      </GridCard>
      <GridCard className="col-span-3 border-accent-orange shadow-accent-orange">
        MAHacks will always be completely free, and every participant will walk away with
        free swag and, hopefully, a prize! Food and drinks will be provided!
      </GridCard>
      <GridImage
        className="col-span-3"
        src={Image7}
        title="Photo from MAHacks V @ Rapid 7 by Jolene Pern"
      />
      {/* <GridCard className="col-span-2 text-xl font-medium">
        Prizes will be awarded based on creativity, ingenuity, and functionality.
      </GridCard> */}
      {/* <GridImage className="col-span-2 row-span-3" src={Image2} title="Two MAHacks 2018 attendees" /> */}
    </div>
  )
}

export default InfoGrid
