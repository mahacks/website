// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { createApplication, getEmail } from 'lib/data'

const domain = process.env.MAILGUN_DOMAIN!
const mg = new Mailgun(formData).client({
  username: 'api',
  key: process.env.MAILGUN_KEY!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, data } = req.body

  if (!secret) return res.status(400).send('Go away')

  const email = await getEmail(secret)

  if (!email.fields.confirmed) return res.status(401).send('Email not verified')

  await createApplication({
    ...data,
    email: email.fields.email
  })

  res.json({
    submitted: true,
  })
}
