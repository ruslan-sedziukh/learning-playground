import Button from '@/components/Button'

export default function Page() {
  // This function should be called on the server when user clicks a button
  async function createInvoice(/* formData: FormData */) {
    'use server'

    console.log('server form action called')
  }

  return (
    <div className="flex flex-col gap-2">
      <p>Click and check server logs</p>

      <form action={createInvoice}>
        <Button>Click</Button>
      </form>
    </div>
  )
}
