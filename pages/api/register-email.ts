// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { createEmail } from 'lib/data'
import crypto from 'crypto'
import dedent from 'dedent'

const domain = process.env.MAILGUN_DOMAIN!
const mg = new Mailgun(formData).client({
  username: 'api',
  key: process.env.MAILGUN_KEY!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  if (!email) return res.status(400).send('No email')

  const verificationSecret = crypto.randomBytes(16).toString('hex')

  await createEmail(email, verificationSecret)

  await mg.messages.create(domain, {
    from: `MAHacks Application <registration@${domain}>`,
    'h:Reply-To': 'team@mahacks.com',
    to: email,
    subject: 'Your MAHacks Registration Link',
    text: dedent`Hello!
    
    Please click the link below to apply for MAHacks VI. We can't wait to see you!

    http://mahacks.com/application/${verificationSecret}
    
    If you have any questions, please reach out to team@mahacks.com.
    
    Thanks,
    The MAHacks Team`,
  })

  res.json({
    sent: true,
  })
}
