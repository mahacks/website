// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { ApplicationFields, createApplication, getEmail } from 'lib/data'
import dedent from 'dedent'
import axios from 'axios'

const domain = process.env.MAILGUN_DOMAIN!
const mg = new Mailgun(formData).client({
  username: 'api',
  key: process.env.MAILGUN_KEY!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, data }: { secret: string; data: ApplicationFields } = req.body
  if (!secret) return res.status(400).send('Go away')

  const email = await getEmail(secret)

  if (!email.fields.confirmed) return res.status(401).send('Email not verified')

  await createApplication({
    ...data,
    email: [email.id],
  })

  const name = data.name || data.legal_name.split(' ')[0]

  // await axios.post(`${process.env.SENDY_URL}/subscribe`, {
  //   api_key: process.env.SENDY_KEY,
  //   name,
  //   email: email.fields.email,
  //   list: process.env.SENDY_LIST_ID
  // })

  try {
    await mg.messages.create(domain, {
      from: `MAHacks <team@${domain}>`,
      to: email.fields.email,
      subject: `You're registered for MAHacks!`,
      text: dedent`Hello ${name},
      
      You're now registered for MAHacks VI!
      
      TODO`,
    })
  } finally {
  }

  res.json({
    submitted: true,
  })
}
