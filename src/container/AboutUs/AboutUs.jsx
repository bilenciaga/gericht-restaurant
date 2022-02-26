import Button from '../../components/Button/Button';
import { images } from '../../constants'

const AboutUs = () => (
  <div className='min-h-screen py-8 px-10 bg-black flex flex-col md:flex-row md:justify-between md:items-center' >

    <div className='flex flex-col items-end text-right'>
      <div>
        <h1 className='font-cormorant text-yellow-200 text-5xl md:text-7xl'>About Us</h1>
      </div>
      <div>
        <img src={images.spoon} className='w-12' alt=''></img>
      </div>
      <div className='my-6'>
        <p className="text-white text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>
      <div>
      <Button>Know More</Button>
      </div>
    </div>

    <div className='flex justify-center my-20 mx-10 min-w-fit	'>
      <img src={images.knife} className='h-[910px] md:h-[1110px]' alt=''></img>
    </div>

    <div className='flex flex-col items-start text-left'>
      <div>
        <h1 className='font-cormorant text-yellow-200 text-5xl md:text-7xl'>Our History</h1>
      </div>
      <div>
        <img src={images.spoon} className='w-12' alt=''></img>
      </div>
      <div className='my-6'>
        <p className="text-white text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      </div>
      <div>
      <Button>Know More</Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
