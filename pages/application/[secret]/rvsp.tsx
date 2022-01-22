import type { GetServerSidePropsContext, NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Button from 'components/Button'
import { RiLoader4Fill } from 'react-icons/ri'
import axios from 'axios'
import { ApplicationFields, getEmail, updateEmailBySecret } from 'lib/data'
import Icon from '@hackclub/icons'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormField from 'components/Forms/FormField'
import Input from 'components/Forms/Input'
import { useRouter } from 'next/router'
import Meta from 'components/Meta'

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

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setSubmitting(true)
    setError(false)

    try {
      const res = await axios.post('/api/application/submit-rvsp', {
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
