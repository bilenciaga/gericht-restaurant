import React from 'react'

function Button( {children} ) {
  return (
     <button className='px-5 py-2 text-black bg-yellow-100 border rounded-sm tracking-wider'>{children}</button>
  )
}

export default Button