import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import Dashboard from './Dashboard'

export default async function page() {
  const session = await auth();

  if (!session?.user.jwt) {
    redirect(`/`);
  }
  return (
    <Dashboard/>
  )
}
