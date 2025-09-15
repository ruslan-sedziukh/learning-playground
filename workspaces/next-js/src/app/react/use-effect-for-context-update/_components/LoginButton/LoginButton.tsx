'use client'

import { useEffect } from 'react'
import { useUser } from '../../_context/user-context'
import Button from '@/components/Button'

const LoginButton = () => {
  const { setUser } = useUser();

  // Causes the error: 
  // Cannot update a component (`UserProvider`) while rendering a different component (`LoginButton`). To locate the bad setState() call inside `LoginButton`, follow the stack trace as described in 
  setUser("Alice")

  // Because of this error useEffect is appropriate way to set user
  // useEffect(() => {
  //   setUser("Alice")
  // }, [setUser])

  return <Button onClick={() => {
    setUser("Alice")
  }}>Log in as Alice</Button>
}

export default LoginButton
