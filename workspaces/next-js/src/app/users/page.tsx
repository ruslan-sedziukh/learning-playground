import { cookies } from 'next/headers';

interface User {
  name: string,
  email: string,
  id: number
}

const Page = async () => {
  const getUsers = async () => {
    const cookieStore = await cookies();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          // This is required to put access token in request cookies
          Cookie: cookieStore.toString(),
        },
      })

      if (!response.ok) {
        console.log('response:', response)
        throw new Error('Login failed');
      }

      const data = await response.json();

      return data
    } catch (error) {
      console.error('Error:', error);
    }

    return
  }

  const users: User[] = await getUsers()

  const usersList = users.map(({ name, email, id }) => <p key={id}>Name: {name}. Email: {email}</p>)

  return (
    <>
      <div>Hello user</div>

      {<div>Users: {usersList}</div>}
    </>)
}

export default Page
