import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-black text-white'>
      <div>
        <dotlottie-player src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className='dis-info'>
        <h1 className='text-2xl'>Hi, I am John</h1>
        <p className='text-red-600 my-2 italic tracking-wider'>Some Dev, Freelancer, Rounder</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem facere eveniet in adipisci eos minus praesentium nam sit reprehenderit commodi deleniti non dolorum velit sapiente quam architecto esse recusandae!</p>
      </div>
    </div>
  )
}
export default Display