import { z } from 'zod'

export const profileSchema = z.object({
  facebook: z.string().url('Invalid Facebook URL'),
  twitter: z.string().url('Invalid X.com URL'),
  linkedin: z.string().url('Invalid Linkedin URL'),
  instagram: z.string().url('Invalid Instagram URL'),
  firstName: z.string(),
  lastName: z.string(),
  emailAddress: z.string(),
  phone: z.string(),
  bio: z.string(),
  country: z.string(),
  city: z.string(),
  postalCode: z.string(),
  taxId: z.string(),
})

export type ProfileFormValues = z.infer<typeof profileSchema>
