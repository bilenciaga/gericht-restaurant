import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Newsletter from '../../components/Footer/Newsletter';

const Footer = () => (
  <div className='py-8 px-10 md:py-16 md:px-24 bg-black'>
    <Newsletter />
    <div className='py-16 lg:flex lg:flex-row lg:justify-between'>
      <div className='py-16 text-white flex flex-col justify-center items-center w-full'>
        <p className='text-2xl font-cormorant font-bold mb-3'>Contact Us</p>
        <p className='py-1'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='py-1'>+1 212-344-1230</p>
        <p className='py-1'>+1 212-555-1230</p>
      </div>

      <div className='py-16 text-white flex flex-col justify-center items-center text-center w-full'>
        <div className='w-3/4'>
          <img src={images.gericht} alt=''></img>
        </div>
        <p className='text-white mt-3'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <div className='flex justify-center my-4'>
          <img src={images.spoon} alt=''></img>
        </div>

        <div className='text-white flex flex-row justify-center'>
          <FiFacebook className='mx-2 text-2xl'/>
          <FiTwitter className='mx-2 text-2xl'/>
          <FiInstagram className='mx-2 text-2xl '/>
        </div>
      </div>

      <div className='text-white py-16 flex flex-col justify-center items-center w-full'>
        <p className='text-2xl font-cormorant font-bold mb-3'>Working Hours</p>
        <p className='py-1'>Monday-Friday:</p>
        <p className='py-1'>08:00 AM - 12:00 AM </p>
        <p className='py-1'>+1 212-555-1230</p>
      </div>

    </div>

    <div className='flex justify-center items-center'>
      <p className='text-white text-sm'>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
