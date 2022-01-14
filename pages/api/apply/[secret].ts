// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createEmail, updateEmailBySecret } from 'lib/data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret } = req.query

  if (typeof secret !== 'string') return res.status(400).send('Invalid link')

  // Confirm email
  await updateEmailBySecret(secret, true)

  // Redirect to application
  return res.redirect(`${APPLICATION_URL}?prefill_secret=${secret}`)
}
