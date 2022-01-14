import AirtablePlus from 'airtable-plus'

const { APPLICATIONS_BASE_ID, AIRTABLE_KEY } = process.env

const table = (tableName: string) => new AirtablePlus({
  baseID: process.env.APPLICATIONS_BASE_ID,
  apiKey: process.env.AIRTABLE_KEY,
  tableName
})

const applications = table('Applications')
const RVSPs = table('RVSPs')
const emails = table('Emails')

export const createEmail = (email: string, secret: string) => emails.create({
  email,
  secret
})

export const updateEmailBySecret = (secret: string, confirmed: boolean) => emails.updateWhere(`secret = "abc"`, {
  confirmed
})

