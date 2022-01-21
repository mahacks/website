import type { NextPage } from 'next'

const Submitted: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-accent-red via-primary to-accent-blue bg-oversize animate-moving-bg flex justify-center items-center gap-4">
      <div className="text-center p-8 bg-bg-card bg-opacity-70 rounded-xl max-w-5xl mx-3">
        <h2 className="text-5xl font-semibold mb-16">
          🥳 Yay! You&apos;re registered for MAHacks!
        </h2>
        <div>
          <p className="font-semibold">
            You&apos;ll receive an email in the next few minutes with
            confirmation of your application.
          </p>
          <p>
            A week before the event, we&apos;ll send you an email with an RVSP
            link and required documents for you and your parent/guardian to
            sign. Make sure to read all emails from us so you don&apos;t miss
            it!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Submitted
