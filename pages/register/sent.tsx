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
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 m-5 bg-gray-100 rounded-xl flex flex-col gap-4 max-w-xl text-center">
        <h1 className="text-2xl">📬 Check your Inbox 💌</h1>

        <p className="text-center">
          We sent you an email with a link to register. If you don&apos;t
          receive it within 5 minutes, check your spam folder,{' '}
          <Link href="/register">
            <a className="underline">try again</a>
          </Link>
          , or email us at team@mahacks.com.
        </p>
      </div>
    </div>
  )
}

export default Register
