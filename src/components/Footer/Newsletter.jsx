import { images } from '../../constants';
import Button from '../Button/Button';

function Newsletter() {
  return (
  <div className='flex justify-center'>
    <div className='px-10 py-2 max-w-4xl bg-black flex flex-col justify-center items-center md:border md:border-yellow-200 text-white'>
      <p className="text-white font-cormorant mt-5 text-lg md:text-2xl font-bold">Newsletter</p>
      <img src={images.spoon} className='w-12 mb-5' alt=''></img>
      <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5 text-center'>Subscribe To Our Newsletter</h1>
      <p>And never miss latest Updates!</p>

      <div className='my-5 flex flex-col lg:flex-row justify-between items-center w-full'>
        <div className=' my-5 mx-auto border bg-black border-yellow-200 rounded-sm w-full md:w-9/12 text-left '>
          <input className='p-1 font-cormorant text-white bg-black  text-lg' placeholder='Enter your e-mail address'></input>
        </div>

        <div className='mt-5 lg:my-auto lg:mx-auto'>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  </div>


  ) 
}

export default Newsletter