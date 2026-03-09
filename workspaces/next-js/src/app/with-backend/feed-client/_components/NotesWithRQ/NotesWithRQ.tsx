'use client'

import { Note } from '../../_types/Note.type';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Notes = () => {
  const { data: notes, error, isLoading } = useQuery<Note[]>({
    queryKey: ['notes'],
    queryFn: () => axios.get("http://localhost:3000/notes").then(res => res.data),
  });

  const notesList = notes?.map(({ title, description, id }) => <p key={id}>Title: {title}. : {description}</p>)

  if (isLoading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {error.message}</p>
  } else {
    return <div>Users: {notesList}</div>
  }
}

export default Notes
