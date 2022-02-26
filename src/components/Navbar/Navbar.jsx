import { useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {

  let Links =[
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"MENU",link:"/"},
    {name:"AWARDS",link:"/"},
    {name:"CONTACT",link:"/"},
  ];

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='flex items-center justify-between bg-black py-2 px-4'>

      <div className='w-28 md:w-44'>
        <img src={images.gericht} alt="navbar_logo" />
      </div>

      <ul className="hidden text-white text-lg md:hidden lg:flex">
      {
          Links.map((link)=>(
            <li key={link.name} className='mx-4 hover:scale-150 hover:transition'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))
      }
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
            <MdOutlineRestaurantMenu size='40' className="absolute top-5 right-5 text-yellow-200" onClick={() => setToggleMenu(false)} />
            <ul className="">
            {
          Links.map((link)=>(
            <li key={link.name} className='m-8 font-cormorant text-yellow-200'>
              <a href={link.link}>{link.name}</a>
            </li>
            ))
            }
            </ul>
          </div>
        )}
      </div>


    </nav>
  )
}
;

export default Navbar;
