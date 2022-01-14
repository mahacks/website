import AirtablePlus from 'airtable-plus'

const { APPLICATIONS_BASE_ID, AIRTABLE_KEY } = process.env

const table = (tableName: string) =>
  new AirtablePlus({
    baseID: process.env.APPLICATIONS_BASE_ID,
    apiKey: process.env.AIRTABLE_KEY,
    tableName,
  })

const applications = table('Applications')
const RVSPs = table('RVSPs')
const emails = table('Emails')

export const createEmail = (email: string, secret: string) =>
  emails.create({
    email,
    secret,
  })

export const updateEmailBySecret = (secret: string, confirmed: boolean) =>
  emails.updateWhere(`secret = "abc"`, {
    confirmed,
  })

export interface EmailRecord {
  // id: string
  fields: {
    email: string
    confirmed: string
    secret: string
  }
}

export const getEmail = (secret: string): Promise<EmailRecord> =>
  emails
    .read({
      filterByFormula: `secret = "${secret}"`,
    })
    // .then(console.log)
    .then((res: any) => res[0])

export interface ApplicationRecord {}
