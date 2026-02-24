import CustomBreadcrumb from '@/components/breadcrumb'
import CustomDialog from '@/components/dialog'
import TextField from '@/components/textField'
import { Button } from '@/components/ui/button'
import { USER_INFO } from '@/data'
import { path } from '@/routers/path'
import type { IBreadcrumb } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Facebook, Instagram, Linkedin, Pencil, Twitter } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { profileSchema, type ProfileFormValues } from './schemas'

const paths: IBreadcrumb[] = [
  { href: path.home, name: 'Home' },
  { href: path.profile, name: 'Profile' },
]
export default function Profile() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [isOpenDialogEditAddr, setIsOpenDialogEditAddr] = useState(false)

  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      twitter: 'https://x.com/PimjoHQ',
      facebook: 'hellohttps://www.facebook.com/PimjoHQ',
      linkedin: 'https://linkedin.com/PimjoHQ',
      instagram: 'https://instagram.com/PimjoHQ',
      firstName: 'Musharof',
      lastName: 'Chowdhury',
      emailAddress: 'randomuser@pimjo.com',
      phone: '+09 363 398 46',
      bio: 'Team Manager',
      country: 'United States',
      city: 'Arizona, United States.',
      postalCode: 'ERT 2489',
      taxId: 'AS4568384',
    },
  })

  const handleOpenDialog = () => {
    setIsOpenDialog(!isOpenDialog)
  }

  const handleOpenDialogEditAddr = () => {
    setIsOpenDialogEditAddr(!isOpenDialogEditAddr)
  }

  return (
    <div className=" p-4 pb-20 md:p-6 md:pb-6">
      <div className="flex justify-between mb-6">
        <span className="text-xl font-semibold text-gray-800 dark:text-white/90">
          Profile
        </span>

        <CustomBreadcrumb paths={paths} />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/3">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7 dark:text-white/90">
          Profile
        </h3>

        <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between items-center mb-6 rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
          <div className="flex w-full flex-col items-center gap-6 xl:flex-row">
            <div className="w-[78px] h-[78px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={USER_INFO.avatar}
                alt=""
              />
            </div>
            <div>
              <div className="mb-2 text-center text-lg font-semibold text-gray-800 xl:text-left dark:text-white/90">
                {USER_INFO.firstName} {USER_INFO.lastName}
              </div>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team Manager
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 xl:block dark:bg-gray-700"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Arizona, United States.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-end xl:flex-row gap-4">
            <div className="flex justify-center gap-2">
              <Button variant="icon" size="icon-xl">
                <Facebook size={20} color="#344054" />
              </Button>
              <Button variant="icon" size="icon-xl">
                <Twitter size={20} color="#344054" />
              </Button>

              <Button variant="icon" size="icon-xl">
                <Linkedin size={20} color="#344054" />
              </Button>

              <Button variant="icon" size="icon-xl">
                <Instagram size={20} color="#344054" />
              </Button>
            </div>

            <Button
              onClick={handleOpenDialog}
              variant="icon"
              className="px-4 py-3 h-11 font-semibold"
            >
              <Pencil size={20} color="#344054" />
              Edit
            </Button>
          </div>
        </div>
        <div className="mb-6 rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800 ">
          <div className="flex flex-col gap-6 lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-6">
              <div className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Personal Information
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    First Name
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.firstName}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Last Name
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.lastName}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Email address
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.emailAddress}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.phoneNumber}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Bio
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.bio}
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleOpenDialog}
              variant="icon"
              className="px-4 py-3 w-full lg:w-fit h-11 font-semibold"
            >
              <Pencil size={20} color="#344054" />
              Edit
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800 ">
          <div className="flex flex-col gap-6 lg:flex-row justify-between items-start">
            <div className="flex flex-col gap-6">
              <div className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Address
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Country
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.country}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    City/State
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.address}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Postal Code
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.postalCode}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    Tax ID
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {USER_INFO.taxId}
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleOpenDialogEditAddr}
              variant="icon"
              className="px-4 py-3 w-full lg:w-fit h-11 font-semibold"
            >
              <Pencil size={20} color="#344054" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      <FormProvider {...methods}>
        <form autoFocus={false}>
          <CustomDialog
            dialogTitle="Edit Personal Information"
            dialogDesc="Update your details to keep your profile up-to-date."
            isOpenDialog={isOpenDialog}
            handleOpenDialog={handleOpenDialog}
            dialogContent={
              <div className="custom-scrollbar h-[450px] overflow-y-auto pl-2 pr-4">
                <div>
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Social Links
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <TextField label="Facebook" name="facebook" />

                    <TextField label="X.com" name="twitter" />

                    <TextField label="Linkedin" name="linkedin" />

                    <TextField label="Instagram" name="instagram" />
                  </div>
                </div>

                <div className="mt-7">
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Personal Information
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <TextField label="First Name" name="firstName" />

                    <TextField label="Last Name" name="lastName" />

                    <TextField label="Email Address" name="emailAddress" />

                    <TextField label="Phone" name="phone" />
                    <TextField label="Bio" name="bio" />
                  </div>
                </div>
              </div>
            }
          />

          <CustomDialog
            dialogTitle="Edit Address"
            dialogDesc="Update your details to keep your profile up-to-date."
            isOpenDialog={isOpenDialogEditAddr}
            handleOpenDialog={handleOpenDialogEditAddr}
            dialogContent={
              <div className="h-fit overflow-auto mb-6">
                <div>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <TextField label="Country" name="country" />

                    <TextField label="City/State" name="city" />

                    <TextField label="Postal Code" name="postalCode" />

                    <TextField label="TAX ID" name="taxId" />
                  </div>
                </div>
              </div>
            }
          />
        </form>
      </FormProvider>
    </div>
  )
}
