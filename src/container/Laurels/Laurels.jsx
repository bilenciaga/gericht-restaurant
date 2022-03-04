import React from 'react'
import { data, images } from '../../constants'
import Award from '../../components/AwardItem/Award'


function Laurels() {
  return (
    <div className='py-8 px-10 md:py-16 md:px-24 lg:flex lg:flex-row lg:justify-between bg-black'>

      <div className='flex flex-col text-white lg:w-full lg:justify-center '>
        <p className='text-white font-cormorant text-lg md:text-2xl font-bold'>Awards & Recognition</p>
        <img src={images.spoon} className='w-12 mb-5' alt=''></img>
        <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5'>Our Laurels</h1>

        <div className='md:grid md:grid-cols-2'>
          {data.awards.map((award) => <Award award={award} key={award.title} />)}
        </div>
      </div>

      <div className='flex justify-center mx-auto'>
        <img src={images.laurels} className='mt-10 w-full lg:m-auto lg:w-4/5' alt='' />
      </div>
      
    </div>
  )
}

export default Laurels