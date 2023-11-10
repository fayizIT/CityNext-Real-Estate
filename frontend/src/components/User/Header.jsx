import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom' ; //to navigate route

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between max-w-6xl mx-auto p-3'>
        <Link to='/'>

        <h1 className='font-bold text-sm sm:text-xl flex'>
            <span className='text-slate-500'>City</span>
            <span className='text-slate-700'>Next</span>
        </h1>
        </Link>

        <form className='bg-slate-100 p-2 rounded-full flex items-center'>
            <input type="text" placeholder='   search ...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
           <FaSearch className='text-slate-600 '  />
        </form>
        <ul className='flex gap-4 '>
            <Link to='/'>

            <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>About</li>
            </Link>
            
            <Link to='/login'>
            <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer'>Sign in</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
