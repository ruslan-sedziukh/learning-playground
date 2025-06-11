import Button from '@/components/Button/Button'

export default function Page() {
  async function createInvoice(/* formData: FormData */) {
    'use server'

    console.log('server form action called')
  }

  return (
    <form action={createInvoice}>
      <Button>Click</Button>
    </form>
  )
}
