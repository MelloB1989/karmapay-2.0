import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import ManageOrders from './manage-orders'

export default async function page() {
  const session = await auth();

  if (!session?.user.jwt) {
    redirect(`/`);
  }
  return (
    <ManageOrders/>
  )
}
