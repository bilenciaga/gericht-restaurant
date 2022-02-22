import { useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='flex items-center justify-between bg-black py-3 px-6'>

      <div className='w-20 md:w-40'>
        <img src={images.gericht} alt="navbar_logo" />
      </div>

      <ul className="hidden text-white text-lg md:hidden lg:flex">
        <li className="mx-4 hover:scale-150 hover:transition"><a href="#home">Home</a></li>
        <li className="mx-4 hover:scale-150 hover:transition"><a href="#about">About</a></li>
        <li className="mx-4 hover:scale-150 hover:transition"><a href="#menu">Menu</a></li>
        <li className="mx-4 hover:scale-150 hover:transition"><a href="#awards">Awards</a></li>
        <li className="mx-4 hover:scale-150 hover:transition"><a href="#contact">Contact</a></li>
      </ul>

      <div className="hidden md:flex lg:flex text-white text-md">
        <a href="#login" className="mx-2 hover:border-b-2">Log In / Registration</a>
        <div className='w-0.5 h-30 bg-white'></div>
        <a href="/" className="mx-2 hover:border-b-2">Book Table</a>
      </div>

      
      <div className='flex text-2xl text-white md:hidden'>
        <GiHamburgerMenu  onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="w-full h-screen fixed top-0 left-0 bg-black flex flex-col justify-center text-center">
            <MdOutlineRestaurantMenu className="absolute top-5 right-5" onClick={() => setToggleMenu(false)} />
            <ul className="">
              <li className='m-8'><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='m-8'><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='m-8'><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='m-8'><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li className='m-8'><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>


    </nav>
  )
}
;

export default Navbar;
