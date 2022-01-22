import type { NextPage } from 'next'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Button from 'components/Button'
import clsx from 'clsx'
import { RiLoader4Fill } from 'react-icons/ri'
import axios from 'axios'
import Input from 'components/Forms/Input'
import { useRouter } from 'next/router'
import Meta from 'components/Meta'
import PerspectivePlane from 'components/Effects/PerspectivePlane'

const Register: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submit = async () => {
    setSubmitting(true)
    setError(false)

    try {
      const res = await axios.post('/api/register-email', {
        email: inputRef.current?.value,
      })
      if (!res.data.sent) throw 'Email not sent'
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PerspectivePlane />

      <div
        className="h-screen flex items-center justify-center"
        style={{
          transform: 'perspective(1px)', // Safari fix
        }}
      >
        <Meta
          title="Register"
          description="Register for MAHacks VI in March, 2022"
        />

        {!submitted && (
          <form className="p-5 m-5 bg-bg-card z-10 rounded-xl flex flex-col gap-4 max-w-xl">
            <Link href="/">
              <a>
                <span className="flex gap-1 items-center font-semibold">
                  <BsArrowLeft className="inline-block" /> MAHacks
                </span>
              </a>
            </Link>

            <h1 className="text-2xl">🎟 Register for MAHacks VI</h1>

            <p>
              Enter your email to start your MAHacks application. Your ticket is
              completely free!
            </p>

            <div>
              <Input
                required
                type="email"
                placeholder="wacky@mahacks.com"
                ref={inputRef}
              />
              <p className="text-xs text-gray-400">
                Use a non-school email address, schools may block external
                emails. We will never share your email.
              </p>
            </div>

            {error && (
              <p className="text-red-500">
                Uh-oh... Something went wrong. Try again or send an email to
                team@mahacks.com.
              </p>
            )}

            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                submit()
              }}
            >
              {submitting ? (
                <span className="flex justify-center">
                  <RiLoader4Fill size={24} className="animate-spin" />
                </span>
              ) : (
                'Submit'
              )}
            </Button>

            <p className="text-sm">
              You must be in high school to apply here. If you are older or
              younger, please contact us instead.
            </p>

            <p className="text-xs text-gray-400">
              Already submitted your application? Send an email to
              team@mahacks.com if you need to update something.
            </p>
          </form>
        )}

        {submitted && (
          <div className="p-5 m-5 bg-bg-card z-10 rounded-xl flex flex-col gap-4 max-w-xl text-center">
            <h1 className="text-2xl">📬 Check Your Inbox</h1>

            <p className="text-center">
              We sent you an email with a link to register. If you don&apos;t
              receive it within 5 minutes, check your spam folder,{' '}
              <a
                className="underline"
                href="#"
                onClick={() => setSubmitted(false)}
              >
                try again
              </a>
              , or email us at{' '}
              <a href="mailto:team@mahacks.com&sub=MAHacks VI Registration Issues"></a>{' '}
              team@mahacks.com.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Register
