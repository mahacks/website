import type { NextPage } from 'next'
import Link from 'next/link'

const Submitted: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-primary to-secondary bg-oversize animate-moving-bg flex justify-center items-center gap-4">
      <div className="text-center p-8 bg-white bg-opacity-70 text-black rounded-xl">
        <h2 className="text-5xl font-semibold mb-16">
          🥳 Yay! You&apos;re registered for MAHacks!
        </h2>
        <div>
          <p>
            1. You&apos;ll receive an email in the next few minutes with
            confirmation of your application.
          </p>
          <p>
            2. A few weeks before the event, you and your parent/guardian will
            receive an email with a waiver to sign.
          </p>
          <p>
            3. A week or so before the event, you&apos;ll receive a link to the
            RSVP form. You must complete this to receive your ticket.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Submitted
