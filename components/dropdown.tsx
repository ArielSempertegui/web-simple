'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Dropdown({menuText}:{menuText: string}) {

    const list = [
        { href: '/', label: 'Home',},
        { href: '/prueba1', label: 'Properties',},
        { href: '/prueba2', label: 'Add Property',}
    ]
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => setOpen(prev => !prev)
    const handleBlur = () => setTimeout(() => setOpen(false), 100)
    
  return (
    <>
        <div className="mx-auto md:mx-28 relative flex flex-col items-center w-[340px] bg-purple-700">
            <button 
                className="bg-purple-400 p-4 w-full flex items-center justify-between font-bold text-xl rounded-lg tracking-wider border-4 border-transparent active:border-white active:text-white duration-300"
                onClick={handleClick}
                onBlur={handleBlur}
            >
                {menuText}
                <svg
                    className={`${isOpen ? 'rotate-180' : ''} w-4 h-4 transition-transform duration-200`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-20 w-full bg-pink-950 p-4 rounded-lg z-10">
                    {list.map(item => 
                        <div key={item.label}
                            className="flex w-full justify-between hover:bg-blue-400 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                        >
                            <Link href={item.href} className="flex-1 text-xl text-white rounded-md px-3 py-2">{item.label}</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    </>
  )
}
