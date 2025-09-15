import Greeting from './_components/Greeting';
import LoginButton from './_components/LoginButton';
import { UserProvider } from './_context/user-context';

export default function Page() {
  return (
    <UserProvider>
      <Greeting />
      <LoginButton />
    </UserProvider>
  )
}
