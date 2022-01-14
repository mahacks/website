// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { createEmail, updateEmailBySecret } from 'lib/data'
import crypto from 'crypto'
import dedent from 'dedent'

const domain = process.env.AIRTABLE_DOMAIN!

const mg = new Mailgun(formData).client({ username: 'api', key: process.env.MAILGUN_KEY! })

const APPLICATION_URL = 'https://airtable.com/shrXN7pgnRPqKeqzb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret } = req.query

  if (typeof secret !== 'string') return res.status(400).send("Invalid link")

  // Confirm email
  await updateEmailBySecret(secret, true)

  // Redirect to application
  return res.redirect(`${APPLICATION_URL}?prefill_secret=${secret}`)
}
