import type { NextPage } from 'next'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Button from 'components/Button'
import clsx from 'clsx'
import { RiLoader4Fill } from 'react-icons/ri'
import axios from 'axios'
import Input from 'components/Forms/Input'

const Register: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [submitting, setSubmitting] = useState(false)

  const submit = async () => {
    setSubmitting(true)

    const res = await axios.post('/api/register-email', {
      email: inputRef.current?.value,
    })

    setSubmitting(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="p-5 m-5 bg-gray-100 rounded-xl flex flex-col gap-4 max-w-xl">
        <Link href="/">
          <a>
            <span className="flex gap-1 items-center font-semibold">
              <BsArrowLeft className="inline-block" /> MAHacks
            </span>
          </a>
        </Link>

        <h1 className="text-2xl">🎟 Register for MAHacks VI 💻</h1>

        <p>
          Enter your email to start your MAHacks application. Your ticket is
          completely free!
        </p>

        <div>
          <Input placeholder="wacky@mahacks.com" ref={inputRef} />
        </div>

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
      </form>
    </div>
  )
}

export default Register
