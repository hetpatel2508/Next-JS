import Link from 'next/link'
import React from 'react'

export default function Contact(): JSX.Element {
  return (
    <div>
        <center className='flex gap-2 flex-col mt-6'>
            <Link href={"/contact/email"}>Go to Email</Link>
            <Link href={"/contact/phone"}>Go to Phone</Link>
        </center>
    </div>
  )
}
