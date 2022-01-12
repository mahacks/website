import Image from 'next/image'
import Benjamin from 'photos/team/benjamin2.png'

const Person = ({ name, role, pronouns, image }: any) => {
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
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-lg">
          {name} <span className="text-gray-500 font-light">({pronouns})</span>
        </h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  )
}

const Grid: React.FC = ({ children }) => (
  <div className="grid gap-5 grid-cols-3 grid-flow-col">{children}</div>
)

const Team: React.FC = () => {
  return (
    <Grid>
      <Person
        name="Kunal Botla"
        role="Organizer"
        pronouns="he/him"
        image={Benjamin}
      />
      <Person
        name="Claire Wang"
        role="Organizer"
        pronouns="she/her"
        image={Benjamin}
      />
      <Person
        name="Benjamin Ashbaugh"
        role="Organizer"
        pronouns="he/him"
        image={Benjamin}
      />
    </Grid>
  )
}

export default Team
