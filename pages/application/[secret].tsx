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
import { ApplicationFields, getEmail, updateEmailBySecret } from 'lib/data'
import Icon from '@hackclub/icons'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormField from 'components/Forms/FormField'
import { censorEmail } from 'lib/util'
import Input from 'components/Forms/Input'
import { useRouter } from 'next/router'
import Meta from 'components/Meta'

type ApplicationFormData = ApplicationFields & {}

const SectionHeading: React.FC = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
)

const Application: NextPage<{
  email: string
  secret: string
}> = ({ email, secret }) => {
  const { register, handleSubmit } = useForm<ApplicationFormData>()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setSubmitting(true)
    setError(false)

    try {
      const res = await axios.post('/api/application/submit', {
        secret,
        data,
      })
      if (!res.data.submitted) throw 'Error submitting'

      router.replace('/application/submitted')
    } catch (err) {
      console.error(err)
      setError(true)
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const l = (e: any) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', l)
    return () => window.removeEventListener('beforeunload', l)
  }, [])

  return (
    <div className="min-h-screen md:my-10 flex flex-col items-center justify-center">
      <Meta title="Your MAHacks Application" />

      <form
        className="p-5 m-5 bg-bg-card rounded-xl flex flex-col gap-9 max-w-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* eslint-disable @next/next/no-html-link-for-pages */}
        <a
          href="/"
          target={'_blank'}
          className="text-sm text-gray-400 font-semibold flex gap-1 items-center justify-center"
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
          if you have any questions.
        </p>

        <FormField label="Email">{email}</FormField>

        <SectionHeading>Your Info</SectionHeading>

        <FormField
          label="What's your legal name?"
          description="This should be the first and last name on the ID you'll bring to the event"
          required
        >
          <Input
            required
            placeholder="Fred Oozlewater"
            {...register('legal_name')}
          />
        </FormField>

        <FormField
          label="Do you have a preferred name?"
          description="If you want us to call you something different, enter it here."
        >
          <Input {...register('name')} placeholder="Freddy" />
        </FormField>

        <FormField label="What are your pronouns?">
          <Input {...register('pronouns')} />
        </FormField>

        <FormField label="What school do you go to?">
          <Input {...register('school')} placeholder="Hacker High School" />
        </FormField>

        <FormField required label="What's your graduation year?">
          <Input required as="select" {...register('graduation_year')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Input>
        </FormField>

        <FormField label="What's your t-shirt size?">
          <Input as="select" {...register('shirt_size')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </Input>
        </FormField>

        <FormField required label="What's your level of coding experience?">
          <Input required as="select" {...register('coding_experience')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="none">I&apos;ve never written code before</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">
              Ultra-ninja supreme supercoder (Expert)
            </option>
          </Input>
        </FormField>

        <FormField label="Have you attended a hackathon before?">
          <Input as="select" {...register('hackathon_experience')}>
            <option hidden disabled selected value="">
              Select the first option that applies to you
            </option>
            <option value="none">No</option>
            <option value="mahacks">
              Yes, I&apos;ve attended MAHacks before
            </option>
            <option value="in-person">Yes, in person</option>
            <option value="virtual">Yes, virtually</option>
          </Input>
        </FormField>

        <SectionHeading>Parent/Guardian Contact Info</SectionHeading>

        <FormField
          required
          label="Name"
          description="Please share your parent or guardian's first name"
        >
          <Input required {...register('parent_name')} />
        </FormField>

        <FormField
          required
          label="Email"
          description="Your parent/guardian's email will only be used to send them our waiver, and in case of emergency."
        >
          <Input required type="email" {...register('parent_email')} />
        </FormField>

        <FormField
          required
          label="Phone number"
          description="Your parent/guardian's phone number will only be used in case of emergency."
        >
          <Input required type="tel" {...register('parent_phone')} />
        </FormField>

        <SectionHeading>Other</SectionHeading>

        <FormField label="Do you have any dietary restrictions?">
          <Input
            {...register('dietary_restrictions')}
            placeholder="I only eat cheese"
          />
        </FormField>

        <FormField
          label="Is there anything else we should know?"
          description="Please include any special needs, requests, questions, and anything else we should know about you."
        >
          <Input as="textarea" rows={3} {...register('comments')} />
        </FormField>

        <FormField label="Finally, how did you hear about MAHacks?">
          <Input as="select" {...register('referrer')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="friend">A friend</option>
            <option value="school">School/teacher</option>
            <option value="hack club">Hack Club</option>
            <option value="google">Google</option>
            <option value="social media">Social media</option>
            <option value="attended before">Attended before</option>
            <option value="other">Other</option>
          </Input>
        </FormField>

        {error && (
          <p className="text-lg text-red-500">
            Oops! That wasn&apos;t saved. Please try again...
          </p>
        )}

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

    const email = (await getEmail(secret)).fields.email

    return {
      props: {
        email,
        secret,
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
