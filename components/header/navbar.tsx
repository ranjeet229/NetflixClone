import Link from 'next/link'
import React from 'react'

type Props ={}

const Navbar = (props: Props) => {
  return (
    <header>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <Link href={"/"} className='text-white text-lg font-bold'>
            <img src="/logo.png" alt="Logo" 
            width={120}
            height={120}
            className='cursor-pointer object-contain'
            />
            </Link>

            {/* mobile menu icon */}
            <div className='md:hidden'>
                {/* <MobileMenu/> */}
            </div>
            
        </div>
    </header>
  )
}

export default Navbar