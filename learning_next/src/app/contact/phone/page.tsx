import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div>
        <center className="text-4xl mt-4">This is Phone Page</center>
        <center className="text-lg bg-slate-200 w-1/4 ml-[37%] mt-6 rounded border border-slate-400">
            <Link href="/contact">Go Back to Contact</Link>
        </center>
    </div>
  )
}
