import React from 'react'

function Award({ award}) {
  return (
    <div className='flex my-3 ml-4 justify-left items-center'>
    <img src={award.imgUrl} className='w-[50px] h-[50px] mr-3' alt=''></img>        
    <div>
			<p className='font-cormorant font-semibold text-amber-300 text-xl tracking-wider'>{award.title}</p>
			<p className='font-cormorant font-semibold text-gray-300 text-lg tracking-wider'>{award.subtitle}</p>
    </div>
    </div>
  )
}

export default Award