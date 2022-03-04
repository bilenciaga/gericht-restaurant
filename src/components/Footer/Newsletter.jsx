import { images } from '../../constants';
import Button from '../Button/Button';

function Newsletter() {
  return (
    <div className='px-3 py-2 bg-black flex flex-col justify-center items-center md:border md:border-yellow-200 text-white'>
      <p className="text-white font-cormorant mt-5 text-lg md:text-2xl font-bold">Newsletter</p>
      <img src={images.spoon} className='w-12 mb-5' alt=''></img>
      <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5 text-center'>Subscribe To Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
      <div className=' mt-10 border-2 bg-black border-yellow-200 rounded-sm w-full text-left'>
        <input className='p-1 font-cormorant text-gray-800 bg-black w-full text-lg' placeholder='Enter your e-mail address'></input>
      </div>
      <div className='mt-5'>
        <Button>Subscribe</Button>
      </div>
      
    </div>


  ) 
}

export default Newsletter