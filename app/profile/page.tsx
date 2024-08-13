import Nav from '@/components/landing/nav'
import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import Profile from './Profile'

export default async function page() {
  const session = await auth();

  if (!session?.user.jwt) {
    redirect(`/`);
  }
  return (
    <div><Profile/>
    </div>
    
    

  )
}
