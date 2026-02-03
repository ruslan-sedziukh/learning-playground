import Button from '@/components/Button/Button'
import Input from '@/components/Input'

export default function Page() {
  const loginUser = async (formData: FormData) => {
    'use server'

    console.log('formData:', formData)
  }

  return (
    <div className='flex justify-center'>
      <form action={loginUser} className='flex flex-col gap-4 items-center max-w-[20rem]'>
        <Input placeholder='email' name="email" />

        <Input placeholder='password' name="password" type="password" />

        <Button>Click</Button>
      </form>
    </div>
  )
}