import { cookies } from 'next/headers';

interface Note {
  title: string,
  description: string,
  id: number
}

const Page = async () => {
  const getNotes = async () => {
    const cookieStore = await cookies();

    try {
      const response = await fetch('http://localhost:3000/notes', {
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

  const users: Note[] = await getNotes()

  const notesList = users.map(({ title, description, id }) => <p key={id}>Title: {title}. : {description}</p>)

  return (
    <>
      {<div>Users: {notesList}</div>}
    </>)
}

export default Page
