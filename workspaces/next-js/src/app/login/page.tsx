import Button from '@/components/Button/Button'
import Input from '@/components/Input'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Page() {
  const loginUser = async (formData: FormData) => {
    'use server'

    const email = formData.get('email');
    const password = formData.get('password');

    let isSuccess = false

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log('response:', response)
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.accessToken; // Assuming NestJS returns { accessToken: '...' }

      // Store the JWT in an HTTP-only cookie
      const cookieStore = await cookies();
      cookieStore.set('accessToken', token, {
        // Prevents JS from reading the cookie (XSS protection)
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });

      // Optional: Redirect to dashboard after success
      isSuccess = true
    } catch (error) {
      console.error('Authentication error:', error);
      // In a real app, you would return an error message to the UI here
    }

    if (isSuccess) {
      // This should be outside of try/catch block
      redirect('/user-space');
    }
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