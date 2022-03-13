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
      from: `MAHacks <registration@${domain}>`,
      'h:Reply-To': 'team@mahacks.com',
      to: email.fields.email,
      subject: `You're registered for MAHacks!`,
      text: dedent`Hello ${name},

      You’re now registered for MAHacks VI!

      Due to issues with our venue, we do not have a confirmed date for the event. We will be in touch with you soon to confirm the date. If the selected date doesn't work for you, please send us an email to cancel your registration.
      
      Here’s some information regarding the event:
      - MAHacks will start in the morning of the weekend chosen. The full schedule will be released soon.
      - We’ll send out some documents, an RSVP link, and important reminders starting a few weeks before the event. Please make sure you’ll receive our emails because you’ll need these in order to attend MAHacks!
      - You’ll need proof of COVID vaccination and a valid, preferably government-issued ID in order to attend MAHacks. You might want to prepare this now by downloading your vaccination QR code from https://myvaxrecords.mass.gov/
      - If you have any questions or need help with anything, please don’t hesitate to respond to this email!
      
      We’ll see you this spring!
      
      Thank you, 
      The MAHacks Team
      
      You can reply directly to this email with any questions.`,
    })
  } finally {
  }

  res.json({
    submitted: true,
  })
}
