import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { type ReactNode } from 'react'
import { Button } from '../ui/button'

interface Props {
  dialogTitle: string
  dialogDesc: string
  isOpenDialog: boolean
  handleOpenDialog: () => void
  dialogContent: ReactNode
}
export default function CustomDialog({
  isOpenDialog,
  handleOpenDialog,
  dialogContent,
  dialogTitle,
  dialogDesc,
}: Props) {
  return (
    <Dialog open={isOpenDialog} onOpenChange={handleOpenDialog}>
      <DialogContent
        className="max-w-[calc(100vw-2rem)] lg:max-w-[700px] lg:p-11! rounded-3xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="mb-2 text-lg lg:text-2xl font-semibold text-gray-800 dark:text-white/90">
            {dialogTitle}
          </DialogTitle>
          <DialogDescription className="mb-6 text-xs text-gray-500 dark:text-gray-400 lg:mb-7">
            {dialogDesc}
          </DialogDescription>
        </DialogHeader>
        {dialogContent}
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 sm:w-auto"
              type="button"
            >
              Close
            </Button>
          </DialogClose>
          <Button className="flex w-full justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white! hover:bg-brand-600 sm:w-auto">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
