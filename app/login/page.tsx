import Login from "./login"
import { redirect } from 'next/navigation';
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  if (session?.user.jwt) {
    redirect(`/dashboard`)
  }
  return (
    <>
    <Login/>
    </>
  )
}
