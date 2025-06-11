'use client'

import Button from '@/components/Button/Button'
import { createNoteAction } from '@/app/actions/actions'

export const Client = () => {
  return (
    <Button onClickAction={async () => await createNoteAction()}>Click</Button>
  )
}
