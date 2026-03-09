'use client'

import { useEffect, useState } from 'react';

interface Note {
  title: string,
  description: string,
  id: number
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch('http://localhost:3000/notes', {
          method: 'GET',
        })

        const data = await response.json();

        return data
      } catch (error) {
        console.error('Error:', error);
      }

      return
    }

    getNotes().then(notes => setNotes(notes))
  })

  const notesList = notes.map(({ title, description, id }) => <p key={id}>Title: {title}. : {description}</p>)

  return (
    <>
      {<div>Users: {notesList}</div>}
    </>)
}

export default Notes
