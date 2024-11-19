import React from 'react'

export default function Navbar() {
  return (
    <div className='flex w-full h-16 items-center gap-7 bg-slate-400'>
        <h1 className='text-4xl font-extrabold ml-4'>MySite</h1>
        <h1 className='text-xl'>Home</h1>
        <h1 className='text-xl'>About</h1>
        <h1 className='text-xl'>Contact</h1>
    </div>
  )
}