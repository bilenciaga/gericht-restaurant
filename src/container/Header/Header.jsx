import Button from '../../components/Button/Button';
import { images } from '../../constants'

const Header = () => (
  <div className='min-h-screen py-8 px-10 bg-black flex flex-col justify-between lg:py-16 lg:px-20 lg:flex-row '>

    <div className="flex flex-col justify-center items-start">
      <p className="font-cormorant text-white text-lg md:text-2xl font-bold tracking-wider">Chase The New Flavour</p>
      <div>
        <img src={images.spoon} className='w-12' alt=''></img>
      </div>
      <div className='my-3'>
        <h1 className='text-yellow-200 text-6xl md:text-8xl leading-snug uppercase font-cormorant font-bold tracking-wider'>the key to fine dining</h1>
      </div>
      <div className='my-3'>
        <p className='text-white font-sans tracking-wider'>Sit tellXus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      </div>
      <div className='my-10'>
        <Button>Explore More</Button>
      </div>
      
    </div>


    <div className='flex justify-center items-center lg:ml-10 '>
      <img src={images.welcome} className='w-4/5 ' alt=''></img>
    </div>


  </div>
);

export default Header;
