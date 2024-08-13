import React from 'react'
import Settings from './Settings'
import { redirect } from 'next/navigation';
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();

  if (!session?.user.jwt) {
    redirect(`/`);
  }
  return (
   <Settings/>
  )
}
