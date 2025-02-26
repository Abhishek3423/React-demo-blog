import React from 'react'
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div className='bg-black text-white flex items-baseline justify-between px-4 py-2'>
      <h1 className='text-2xl ml-5'>TailWind</h1>

      <nav className='space-x-4'>
        <NavLink to='/About' className={({ isActive }) =>
          isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
        }>About</NavLink>
        <NavLink to='contact' className={({ isActive }) =>
          isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
        }>Contact</NavLink>
      </nav>

    </div>
  )
}
export default Header;