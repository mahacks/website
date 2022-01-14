import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from 'next'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button from 'components/Button'
import clsx from 'clsx'
import { RiLoader4Fill } from 'react-icons/ri'
import axios from 'axios'
import { getEmail, updateEmailBySecret } from 'lib/data'
import Icon from '@hackclub/icons'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormField from 'components/Forms/FormField'
import { censorEmail } from 'lib/util'
import Input from 'components/Forms/Input'

interface ApplicationFormData {
  legalName: string
  name: string
  codingExperience: 'none' | 'beginner' | 'intermediate' | 'advanced'
  referrer:
    | 'friend'
    | 'school'
    | 'hack club'
    | 'google'
    | 'attended before'
    | 'other'
}

interface ApplicationPageProps {
  email: string
}

const Application: NextPage<ApplicationPageProps> = ({ email }) => {
  const { register, handleSubmit } = useForm<ApplicationFormData>()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit: SubmitHandler<ApplicationFormData> = (data) => {
    setSubmitting(true)

    // const res = await axios.post('/api/register-email', {
    //   email: inputRef.current?.value,
    // })

    setSubmitting(false)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault()
      e.returnValue = ''
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col p-14 items-center justify-center">
      <form
        className="p-5 m-5 bg-gray-100 rounded-xl flex flex-col gap-9 max-w-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* eslint-disable @next/next/no-html-link-for-pages */}
        <a
          href="/"
          target={'_blank'}
          className="text-sm text-gray-600 font-semibold flex gap-1 items-center justify-center"
        >
          MAHacks <Icon glyph="external-fill" size={24} />
        </a>

        <h1 className="text-4xl font-semibold text-center">
          MAHacks VI Application
        </h1>

        <p>
          Thank you for applying to MAHacks VI! This form contains some info
          we&apos;ll need! Please visit our{' '}
          <a className="text-primary-400" target={'_blank'} href="/#faq">
            FAQ
          </a>{' '}
          if you have any questions..
        </p>

        <FormField label="Email">{email}</FormField>

        <FormField
          label="Name"
          description="Whatever you want to be called at the hackathon :)"
        >
          <Input required {...register('name')} />
        </FormField>

        <FormField
          label="Legal Name"
          description="This should be the name on the ID you'll bring to the event"
        >
          <Input
            required
            placeholder="Fred Oozlewater"
            {...register('legalName')}
          />
        </FormField>

        <FormField label="What's your level of coding experience?">
          <Input
            required
            as="select"
            placeholder="Fred Oozlewater"
            {...register('legalName')}
          >
            <option value="none">I&apos;ve never written code before</option>
            <option value="beginner">The Best Beginner</option>
            <option value="intermediate">Awesomely Intermediate</option>
            <option value="advanced">Ultra-ninja supreme supercoder</option>
          </Input>
        </FormField>

        <FormField label="Finally, how did you hear about MAHacks?">
          <Input required as="select" {...register('referrer')}>
            <option hidden disabled selected value="">
              Select an item
            </option>
            <option value="friend">A friend</option>
            <option value="school">School/teacher</option>
            <option value="hack club">Hack Club</option>
            <option value="google">Google</option>
            <option value="attended before">Attended before</option>
            <option value="other">Other</option>
          </Input>
        </FormField>

        <Button type="submit">
          {submitting ? (
            <span className="flex justify-center">
              <RiLoader4Fill size={24} className="animate-spin" />
            </span>
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </div>
  )
}

export default Application

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { secret } = ctx.query
  if (typeof secret !== 'string') throw 'no sir'

  // Confirm email and if it doesn't work then redirect to registration
  try {
    await updateEmailBySecret(secret, true)

    const email = censorEmail((await getEmail(secret)).fields.email)

    return {
      props: {
        email,
      },
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/register',
      },
    }
  }
}
