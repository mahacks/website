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
  emails.updateWhere(`secret = "${secret}"`, {
    confirmed,
  })

export interface EmailRecord {
  id: string
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

export interface ApplicationFields {
  email: string[]
  legal_name: string
  name: string
  pronouns: string
  coding_experience: 'none' | 'beginner' | 'intermediate' | 'advanced'
  comments: string
  referrer: string
  shirt_size: 's' | 'm' | 'l' | 'xl' | 'xxl'
  dietary_restrictions: string
  school: string
  graduation_year: string
  age: 'adult' | 'minor'
  parent_name: string
  parent_email: string
  parent_phone: string
  hackathon_experience: 'none' | 'virtual' | 'in-person'
  phone: string
  fav_number: string
  joke: string
  school_city: string
}

export interface ApplicationRecord {
  id: string
  fields: ApplicationFields
}

export const createApplication = (data: ApplicationFields) =>
  applications.create(data)
