import React from 'react'

function Button( {children} ) {
  return (
    //  <button className='px-5 py-2 text-black bg-yellow-100 border rounded-sm tracking-wider'>{children}</button>
    <a href="#_" className="font-cormorant relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-black text-black transition duration-300 ease-out border bg-yellow-100 rounded shadow-md group">
     <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">{children}</span>
     <span className="relative invisible">{children}</span>
    </a>
  )
}

export default Button