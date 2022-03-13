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
import Heading from 'components/Heading'

type ApplicationFormData = ApplicationFields & {}

const SectionHeading: React.FC = ({ children }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
)

const Application: NextPage<{
  email: string
  secret: string
}> = ({ email, secret }) => {
  const { register, handleSubmit, watch } = useForm<ApplicationFormData>()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const age = watch('age', 'minor')
  const isMinor = age === 'minor'

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
          MAHacks VI Registration
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

        <FormField required label="What are your pronouns?">
          <Input required {...register('pronouns')} />
        </FormField>

        <FormField
          required
          label="What's your phone number?"
          description="We'll use this if we ever need to urgently contact you."
        >
          <Input required type="tel" {...register('phone')} />
        </FormField>

        <FormField required label="What high school do you go to?">
          <Input
            required
            {...register('school')}
            placeholder="Hacker High School"
          />
        </FormField>

        <FormField required label="What city is your school in?">
          <Input
            required
            {...register('school_city')}
            placeholder="Cambridge, MA"
          />
        </FormField>

        <FormField required label="What's your graduation year?">
          <Input required as="select" {...register('graduation_year')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="2022">2022 (12th grade)</option>
            <option value="2023">2023 (11th grade)</option>
            <option value="2024">2024 (10th grade)</option>
            <option value="2025">2025 (9th grade)</option>
            {/* {router.query.allowMiddle && <option value="middle">I'm </option>} */}
          </Input>
        </FormField>

        <FormField required label="What's your t-shirt size?">
          <Input required as="select" {...register('shirt_size')}>
            <option hidden disabled selected value="">
              Select an option
            </option>
            <option value="xs">XS</option>
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

        <FormField required label="Have you attended a hackathon before?">
          <Input required as="select" {...register('hackathon_experience')}>
            <option hidden disabled selected value="">
              Select the first option that applies to you
            </option>
            <option value="mahacks">
              Yes, I&apos;ve attended MAHacks before
            </option>
            <option value="in-person">Yes, in person</option>
            <option value="virtual">Yes, virtually</option>
            <option value="none">No</option>
          </Input>
        </FormField>

        <SectionHeading>Parent/Guardian Contact Info</SectionHeading>

        <FormField
          required
          label="How old will you be on April 1, 2022?"
          description="If you're under 18, you'll be required to have a parent or guardian to sign the waiver. Note that we'll check your ID on check-in ;)"
        >
          <Input
            required
            as="select"
            defaultValue={'minor'}
            {...register('age')}
          >
            <option value="minor" selected>
              Under 18
            </option>
            <option value="adult">Over 18 (I will be a legal adult)</option>
          </Input>
        </FormField>

        <FormField
          required={isMinor}
          label="Parent/guardian Name"
          description={
            "Share your parent or guardian's first name. The following fields are optional if you're over 18."
          }
        >
          <Input required={isMinor} {...register('parent_name')} />
        </FormField>

        <FormField
          required={isMinor}
          label="Parent/guardian Email"
          description="Your parent/guardian's email will only be used to send them any required documents, and in case of emergency."
        >
          <Input
            required={isMinor}
            type="email"
            {...register('parent_email')}
          />
        </FormField>

        <FormField
          required={isMinor}
          label="Parent/guardian Phone number"
          description="Your parent/guardian's phone number will only be used in case of emergency. Optional if you're over 18, but recommended."
        >
          <Input required={isMinor} type="tel" {...register('parent_phone')} />
        </FormField>

        <SectionHeading>Other</SectionHeading>

        <FormField required label="Do you have any dietary restrictions?">
          <Input
            required
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

        <SectionHeading>Let&apos;s get to know you a bit...</SectionHeading>

        <FormField label="What's your favorite number?">
          <Input type="number" {...register('fav_number')} placeholder="42" />
        </FormField>

        <FormField
          label="Tell us a joke!"
          description={
            <>
              {
                "If we don't laugh, we'll delete your application. Don't worry! We're joking."
              }{' '}
              <i>Or are we...</i>
            </>
          }
        >
          <Input
            as="textarea"
            placeholder="Why did the programmer quit their job? Because they didn't get arrays!"
            rows={2}
            {...register('joke')}
          />
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
