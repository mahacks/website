import Icon from '@hackclub/icons'
import clsx from 'clsx'
import Image from 'next/image'
import Benjamin from 'photos/team/benjamin2.png'
import Claire from 'photos/team/claire.png'
import Kunal from 'photos/team/kunal.jpeg'

const Person = ({ name, role, pronouns, image, link }: any) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full"
        objectFit="cover"
        objectPosition={'center'}
      />
      <div className="flex flex-col">
        <a href={link} target={'_blank'} rel="noreferrer">
          <h4
            className={clsx(
              'font-bold text-lg border-b border-transparent border-dashed',
              link && 'hover:border-primary hover:text-primary'
            )}
          >
            {name}
            {/* <span className="text-gray-500 font-light">({pronouns})</span> */}
          </h4>
        </a>
        <p className="text-gray-600">
          {role} &middot; {pronouns}
        </p>
        {/* <a><Icon glyph='web' /></a> */}
      </div>
    </div>
  )
}

const Grid: React.FC = ({ children }) => (
  <div className="grid gap-5 grid-cols-1 md:grid-cols-3 grid-flow-row">
    {children}
  </div>
)

const Team: React.FC = () => {
  return (
    <Grid>
      <Person
        name="Kunal Botla"
        role="Organizer"
        pronouns="he/him"
        image={Kunal}
      />
      <Person
        name="Claire Wang"
        role="Organizer"
        pronouns="she/her"
        image={Claire}
      />
      <Person
        name="Benjamin Ashbaugh"
        role="Organizer"
        pronouns="he/him"
        image={Benjamin}
        // link='https://benjaminashbaugh.me'
      />
    </Grid>
  )
}

export default Team
