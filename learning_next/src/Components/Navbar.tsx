import Link from 'next/link'
import React from 'react'

export default function Navbar(): JSX.Element {
  return (
    <div className='flex w-full h-16 items-center gap-7 '>
        <Link href={"/"} className='text-4xl font-extrabold ml-4'>MySite</Link>
        <Link href={"/about"} className='text-xl'>About</Link>
        <Link href={"/contact"} className='text-xl'>Contact</Link>
        <Link href={"/products"} className='text-xl'>Products</Link>
    </div>
  )
}