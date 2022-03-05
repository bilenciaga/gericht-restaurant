import { images } from '../../constants';
import Button from '../../components/Button/Button';

function FindUs() {
  return (
    <div className='background py-8 px-10 md:py-16 md:px-24 bg-black flex flex-col lg:flex-row lg:justify-center lg:items-center' id='contact'>
      <div className="flex flex-col w-full justify-center items-start lg:w-full">
        <p className="font-cormorant text-white text-lg md:text-2xl font-bold tracking-wider">Contact</p>
        <img src={images.spoon} className='w-12 mb-5' alt=''></img>
        <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5'>Find Us</h1>
        <p className='text-white font-sans tracking-wider'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG.</p>
        <p className='font-cormorant font-semibold text-amber-300 text-xl tracking-wider my-5'>Opening Hours</p>
        <p className='text-white'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='text-white'>Sat - Sun: 10:00 am - 03:00 am</p>
        <div className='mt-5'>
          <Button>Visit Us</Button>
        </div>
      </div>

      <div className='mt-5 lg:mt-auto lg:w-full flex justify-center items-center'>
        <img src={images.findus}  className='lg:w-3/4' alt=''></img>
      </div>

    </div>
  )
}

export default FindUs