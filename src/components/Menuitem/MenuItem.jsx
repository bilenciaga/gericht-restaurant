import React from 'react'

function MenuItem({ title, price, tags }) {

  return (
<div className='my-5'>
  <div className='flex justify-between items-center'>
    <div className='flex flex-col justify-start text-left text-white'>
      <h1 className='font-cormorant text-yellow-100 text-xl md:text-2xl'>{title}</h1>
    </div>
    <div className='flex items-center'>
      <div className='h-0.5 w-20 mr-3 bg-yellow-100'></div>
      <div className=''>
        <p className='text-white font-cormorant text-xl md:text-2xl'>{price}</p>
      </div>
    </div>
  </div>
  <div>
    <p className='text-gray-500 text-left text-xs'>{tags}</p>
  </div>
</div>
  )
}

export default MenuItem