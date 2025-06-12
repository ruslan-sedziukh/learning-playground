'use client'

import Button from '@/components/Button/Button'
import { createNoteAction } from '@/app/nextjs/actions/actions'

export const Client = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>Check server logs</p>

      <Button onClickAction={async () => await createNoteAction()}>
        Click
      </Button>
    </div>
  )
}
