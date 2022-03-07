import { useState} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion'
import images from '../../constants/images';

const Navbar = () => {

  let Links =[
    {name:"HOME",link:"#home"},
    {name:"ABOUT",link:"#about"},
    {name:"MENU",link:"#menu"},
    {name:"AWARDS",link:"#awards"},
    {name:"CONTACT",link:"#contact"},
  ];

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='py-8 px-10 md:px-24 flex items-center justify-between bg-black'>
      <motion.div className='w-28 md:w-44'
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  >
        <img src={images.gericht} alt="navbar_logo" />
      </motion.div>

      <motion.ul className="hidden text-white text-lg md:hidden lg:flex"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1 ,delay: 1}}>
      {
          Links.map((link)=>(
            <li key={link.name} className='mx-4 hover:scale-150 hover:transition'>
              <a href={link.link}>{link.name}</a>
            </li>
          ))
      }
      </motion.ul>

      <motion.div className="hidden md:flex lg:flex text-white text-md"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay: 2}}>
        <a href="#login" className="mx-2 hover:border-b-2">Log In / Registration</a>
        <div className='w-0.5 h-30 bg-white'></div>
        <a href="/" className="mx-2 hover:border-b-2">Book Table</a>
      </motion.div>

      
      <div className='flex text-2xl text-white md:hidden'>
        <GiHamburgerMenu  className='cursor hover:scale-150 hover:transition' onClick={() => setToggleMenu(true)} />
        <AnimatePresence>
        {toggleMenu && (
          <motion.div className="w-full h-screen fixed z-50 top-0 left-0 bg-black flex flex-col justify-center text-center"
                      initial={{x:250}}
                      animate={{x:0}}
                      exit={{opacity:0}}
                      >
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
          </motion.div>
        )}
        </AnimatePresence>
      </div>


    </nav>
  )
}
;

export default Navbar;
