import React from 'react'
import { images } from '../../constants'

function Laurels() {
  return (
    <div className='min-h-screen py-8 px-10 md:py-16 md:px-24 bg-black'>
      <div className='flex flex-col text-white'>
        <p className='text-white font-cormorant text-lg md:text-2xl font-bold'>Awards & Recognition</p>
        <img src={images.spoon} className='w-12 mb-5' alt=''></img>
        <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5'>Our Laurels</h1>
      </div>

    </div>
  )
}

export default Laurels