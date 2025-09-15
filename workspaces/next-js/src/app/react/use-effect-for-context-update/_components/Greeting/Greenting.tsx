'use client'

import { useUser } from '../../_context/user-context'

const Greeting = () => {
  const { user } = useUser()

  return <h1>{user ? `Hello, ${user}!` : "Please log in."}</h1>
}

export default Greeting