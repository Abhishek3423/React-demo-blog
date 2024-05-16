import React from 'react'
import { DiCss3, DiHtml5, DiMongodb, DiPython, DiReact } from "react-icons/di";
const Tech = () => {
  return (

    <div className='mt-10'>
      <h1 className='text-center my-5 text-xl'>Technology I use</h1>

      <div className=' justify-items-center sm:grid cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>


        <DiReact size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />


        <DiPython size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />
        <DiMongodb size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />
        <DiCss3 size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />
        <DiHtml5 size={200} className='hover:scale-110 hover:text-pink-700 transition-all ease-in' />


      </div>
    </div >
  )
}

export default Tech